import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const urlValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    return /^(ftp|http|https):\/\/[^ "]+$/.test(control.value)
      ? null
      : { url: true };
  };
};
