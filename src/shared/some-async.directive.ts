import { Injectable, Directive, forwardRef, Input } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_VALIDATORS, Validator, AsyncValidatorFn } from '@angular/forms';
import { HeroService } from 'src/app/hero.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UniqueAlterEgoValidator implements AsyncValidator {
    constructor(private heroService: HeroService) { }

    validate(
        ctrl: AbstractControl
    ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        console.log("async validation");
        return this.heroService.searchHeroes(ctrl.value).pipe(
            map(results => (results.length) == 0 ? { uniqueAlterEgo: true } : null),
            catchError(() => null)
        );
    }
}

// テンプレート駆動フォームでは、FormControlインスタンスに直接アクセスすることはできません。
// したがって、リアクティブフォームの場合と同じようにバリデータを渡すことはできません。代わりに、ディレクティブをテンプレートに追加する必要があります。
@Directive({
    selector: '[appSomeAsyncValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => UniqueAlterEgoValidator), multi: true }]
})
export class UniqueAlterEgoDirective {

    constructor(private validator: UniqueAlterEgoValidator) { }

    validate(control: AbstractControl) {
        this.validator.validate(control);
    }
}