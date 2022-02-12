import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, ValidatorFn, FormControl } from '@angular/forms';

@Directive({
  selector: '[appCustomMinNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: CustomMinNumberDirective ,
      multi: true
    }
  ]
})
export class CustomMinNumberDirective implements Validator{

  validator: ValidatorFn;
  constructor() {
    this.validator = this.minNumValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  minNumValidator(): ValidatorFn {
    return (control: FormControl) => {
      if (control.value === ''){
        return null;
      }
      else{
        if (Number(control.value) > 0){
          return null;
        }
        else{
          return {
            minNumValidator: { valid: false }
          };
        }
      }
    };
  }
}
