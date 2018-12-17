import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessageService } from './message.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Hero } from './hero';

describe('HeroService', () => {

  let service : HeroService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const heroesConst: Hero[]= [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ] ;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers : [
        HeroService,
        MessageService, 
      ],
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(HeroService);
  });

  it('getHeroes success', () => {
    service.getHeroes().subscribe(
      heroes => {
        expect(heroesConst).toEqual(heroes, 'should return expected heroes')
      },
      fail
    )

    // HeroService should have made one request to GET heroes from expected URL
    const req = httpTestingController.expectOne('api/heroes');
    expect(req.request.method).toEqual('GET', 'send GET request');

    // Respond with the mock heroes
    req.flush(heroesConst);

  });

  it('getHeroes when http404', () => {
    service.getHeroes().subscribe(
      heros => {
        expect(heros.length).toEqual(0, 'should return empty heroes array')
      },
      () => fail("error do not cause")
    );

    // HeroService should have made one request to GET heroes from expected URL
    const req = httpTestingController.expectOne('api/heroes');
    expect(req.request.method).toEqual('GET', 'send GET request');

    // Respond with the mock heroes
    req.flush("error", {status: 404, statusText: 'Not Found'});

  });

  it('getHeroes multi request', () =>{
    service.getHeroes().subscribe();
    service.getHeroes().subscribe();
    service.getHeroes().subscribe(
      heroes => expect(heroes).toEqual(heroesConst, 'should return expected heroes'),
      fail
    );
    
    // 複数のリクエストの場合はmatchを使う
    const reqs = httpTestingController.match('api/heroes');
    expect(reqs.length).toEqual(3, 'calls to getHeroes()');
    
    reqs[0].flush([]);
    reqs[1].flush([{ id: 1, name: 'bob' }]);
    reqs[2].flush(heroesConst);

  });


  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    // 未解決のリクエストが残っていないかどうかチェック
    httpTestingController.verify();
  });


  it('addHero success', ()=>{
    const addHero : Hero ={
      id: 2000,
      name: "test"
    }

    service.addHero(addHero).subscribe(
      data => expect(data).toEqual(addHero, 'should return hero'),
      fail
    );

    const req = httpTestingController.expectOne('api/heroes');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(addHero);
    
    const expectedResponse = new HttpResponse(
      { status: 200, statusText: 'OK', body: addHero });
    req.event(expectedResponse);
  })
});
