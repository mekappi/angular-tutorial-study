import { ValidatorFn, FormGroup, ValidationErrors, NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';
import { Directive } from '@angular/core';

// 複合Validator

// テンプレート駆動フォーム用
@Directive({
    selector: '[appIdentityRevealed]',
    providers: [{ provide: NG_VALIDATORS, useExisting: IdentityRevealedValidatorDirective, multi: true }]
})
export class IdentityRevealedValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors {
        return identityRevealedValidatorForTemplate(control)
    }
}

// リアクティブフォーム用
export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const firstName = control.get('firstName');
    const lastName = control.get('lastName');

    const alterEgo = control.get('alterEgo');
    return firstName && lastName && alterEgo && firstName.value + lastName.value === alterEgo.value ? { 'identityRevealed': true } : null;
};

const identityRevealedValidatorForTemplate: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const name = control.get('name');
    const alterEgo = control.get('alterEgo');
    return name && alterEgo && name.value === alterEgo.value ? { 'identityRevealed': true } : null;
};