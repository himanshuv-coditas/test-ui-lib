import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export interface ValidationConfig {
  path: string;
  label: string;
  validations: Record<
    string,
    string | ((control: AbstractControl, form?: FormGroup) => string)
  >;
  checkDirtyTouched?: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ErrorsService {
  private validationConfig: ValidationConfig[] = [
    {
      path: 'signUp.email',
      label: 'Email',
      validations: {
        required: 'Email is required',
        email: 'Invalid email address',
      },
      checkDirtyTouched: false,
    },
    {
      path: 'signUp.password',
      label: 'Password',
      validations: {
        required: 'Password is required',
        minlength: 'Password must be at least 8 characters',
      },
      checkDirtyTouched: false,
    },
    {
      path: 'signUp.confirmPassword',
      label: 'Confirm Password',
      validations: {
        required: 'Confirm Password is required',
        minlength: 'Confirm password must be at least 8 characters',
      },
      checkDirtyTouched: false,
    },
    {
      path: 'personalInformation.firstName',
      label: 'First Name',
      validations: {
        required: 'First name is required',
        minlength: 'First name must be at least 2 characters',
      },
      checkDirtyTouched: true,
    },
    {
      path: 'personalInformation.lastName',
      label: 'Last Name',
      validations: {
        required: 'Last name is required',
        minlength: 'Last name must be at least 2 characters',
      },
      checkDirtyTouched: true,
    },
    {
      path: 'personalInformation.gender',
      label: 'Gender',
      validations: {
        required: 'Gender is required',
      },
      checkDirtyTouched: true,
    },
    {
      path: 'personalInformation.dateOfBirth',
      label: 'Date of Birth',
      validations: {
        required: 'Date of birth is required',
        minAge: 'You must be at least 16 years old',
      },
      checkDirtyTouched: true,
    },
    {
      path: 'personalInformation.phone',
      label: 'Phone Number',
      validations: {
        required: 'Phone number is required',
        pattern: 'Phone number must be exactly 10 digits',
      },
      checkDirtyTouched: true,
    },
    {
      path: 'personalInformation.address',
      label: 'Address',
      validations: {
        required: 'Address is required',
        minlength: 'Address must be at least 10 characters',
      },
      checkDirtyTouched: true,
    },
    {
      path: 'educationInformation[].school',
      label: 'High School',
      validations: {
        required: 'High school is required',
      },
      checkDirtyTouched: true,
    },
    {
      path: 'educationInformation[].graduationYear',
      label: 'Graduation Year',
      validations: {
        required: 'Graduation year is required',
      },
      checkDirtyTouched: true,
    },
    {
      path: 'educationInformation[].gpa',
      label: 'GPA',
      validations: {
        required: 'GPA is required',
        min: 'GPA must be at least 0.0',
        max: 'GPA cannot exceed 4.0',
      },
      checkDirtyTouched: true,
    },
    {
      path: 'educationInformation[].intendedMajor',
      label: 'Intended Major',
      validations: {
        required: 'Intended major is required',
        minlength: 'Intended major must be at least 2 characters',
      },
      checkDirtyTouched: true,
    },
    {
      path: 'educationInformation[].secondaryMajor',
      label: 'Secondary Major/Minor',
      validations: {
        required: 'Secondary major is required',
        minlength: 'Secondary major must be at least 2 characters',
      },
      checkDirtyTouched: true,
    },
  ];

  constructor() {}

  // getFormErrors(form: FormGroup, section?: string): string[] {
  //   return this.validationConfig.flatMap((config) => {
  //     if (section && !config.path.startsWith(section)) return [];

  //     const control = form.get(config.path);
  //     if (!control || !control.errors) return [];
  //     const shouldCheckTouchedDirty = config.checkDirtyTouched ?? true;
  //     if (!shouldCheckTouchedDirty && !control.touched && !control.dirty)
  //       return [];
  //     return Object.entries(config.validations).flatMap(
  //       ([errorKey, messageOrFn]) => {
  //         if (errorKey === 'custom' && typeof messageOrFn === 'function') {
  //           const msg = messageOrFn(control, form);
  //           return msg ? [msg] : [];
  //         }

  //         return control.hasError(errorKey) ? [messageOrFn as string] : [];
  //       }
  //     );
  //   });
  // }

  getFormErrors(form: FormGroup, section?: string): string[] {
    return this.validationConfig.flatMap((config) => {
      if (section && !config.path.startsWith(section)) return [];

      const isArrayPath = config.path.includes('[]');

      if (isArrayPath) {
        const [arrayName, controlName] = config.path.replace('[]', '').split('.');
        const formArray = form.get(arrayName) as FormArray;
        if (!formArray) return [];

        return formArray.controls.flatMap((group, index) => {
          const control = group.get(controlName);
          if (!control || !control.errors) return [];

          const shouldCheckTouchedDirty = config.checkDirtyTouched ?? true;
          if (shouldCheckTouchedDirty && !control.touched && !control.dirty)
            return [];

          return Object.entries(config.validations).flatMap(([errorKey, messageOrFn]) => {
            if (errorKey === 'custom' && typeof messageOrFn === 'function') {
              const msg = messageOrFn(control, form);
              return msg ? [`[Entry ${index + 1}] ${msg}`] : [];
            }

            return control.hasError(errorKey)
              ? [`[Entry ${index + 1}] ${messageOrFn as string}`]
              : [];
          });
        });
      } else {
        const control = form.get(config.path);
        if (!control || !control.errors) return [];

        const shouldCheckTouchedDirty = config.checkDirtyTouched ?? true;
        if (shouldCheckTouchedDirty && !control.touched && !control.dirty)
          return [];

        return Object.entries(config.validations).flatMap(([errorKey, messageOrFn]) => {
          if (errorKey === 'custom' && typeof messageOrFn === 'function') {
            const msg = messageOrFn(control, form);
            return msg ? [msg] : [];
          }

          return control.hasError(errorKey) ? [messageOrFn as string] : [];
        });
      }
    });
  }


  public minAgeValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;

      const birthDate = new Date(value);
      const today = new Date();

      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      const isOldEnough =
        age > minAge ||
        (age === minAge &&
          (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)));

      return isOldEnough
        ? null
        : { minAge: { requiredAge: minAge, actualAge: age } };
    };
  }
}
