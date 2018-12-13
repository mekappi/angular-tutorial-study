import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from 'src/shared/forbidden-name.directive';
import { JsonPipe } from '@angular/common';
import { identityRevealedValidator } from 'src/shared/identity-revealed.directive';
import { UniqueAlterEgoValidator } from 'src/shared/some-async.directive';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  detail : HeroDetail = new HeroDetail;

  // 普通に書くと↓で複雑なのでFormBuilderを使う

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  // 各値の最初の引数はdefaultValue
  profileForm = this.builder.group({
    firstName: [this.detail.firstName, Validators.required],
    lastName: [this.detail.lastName, [Validators.required, Validators.maxLength(6), forbiddenNameValidator(/bob/i)]],
    alterEgo: [this.detail.alterEgo, {
      validators: [Validators.required, Validators.maxLength(6)],
      asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
      updateOn: 'blur'
    }],
    address: this.builder.group({
      street: [this.detail.address.street],
      city: [this.detail.address.city],
      state: [this.detail.address.state],
      zip: [this.detail.address.zip],
    }),
    aliases: this.builder.array([this.builder.control('')])
  }, { validators: identityRevealedValidator })

  constructor(private builder: FormBuilder, private alterEgoValidator: UniqueAlterEgoValidator) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.profileForm);
  }

  updateProfile() {
    // 一部しか更新しないのであればpatchValue
    // setValueもあるが、こちらは全Fromを更新用（値を設定しないとエラーになってしまう）
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.builder.control(''));
  }

  get lastName() { return this.profileForm.get('lastName'); }

  get alterEgo() { return this.profileForm.get('alterEgo'); }
  
  get debug() { return JSON.stringify(this.detail)};
}

class HeroDetail{
  firstName: string;
  lastName: string;
  alterEgo: string;
  address: HeroAddress = new HeroAddress;
}

class HeroAddress{
  street: string;
  city: string;
  state: string;
  zip: string;
}