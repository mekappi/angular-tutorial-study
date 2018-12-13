import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidatorFn, Validator, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

// テンプレート駆動フォームでは、FormControlインスタンスに直接アクセスすることはできません。
// したがって、リアクティブフォームの場合と同じようにバリデータを渡すことはできません。代わりに、ディレクティブをテンプレートに追加する必要があります。
@Directive({
    selector: '[appForbiddenName]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})
export class ForbiddenValidatorDirective implements Validator {

    @Input('appForbiddenName') forbiddenName: string;

    validate(control: AbstractControl): { [key: string]: any } | null {
        return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control): null;
    }
}


// リアクティブフォームでは、カスタムバリデータは簡単に追加できます。関数をFormControlに直接渡すだけです。
// ValidatorFnはエラーがなければnullを返す
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}
