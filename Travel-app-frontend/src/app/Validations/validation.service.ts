// import { AbstractControl } from '@angular/forms';

// export class ValidationService {

//    static getValidatorErrorMessage(code: string) {
//        let config = {
//            'required': 'Required',
//            'invalidEmailAddress': 'Invalid email address'
//        };
//        return config[code];
//    }

//    static emailValidator(control: AbstractControl) {
//        // RFC 2822 compliant regex
//        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
//            return null;
//        } else {
//            return { 'invalidEmailAddress': true };
//        }
//    }

// }