import { Component, signal } from '@angular/core';
import { CardTypes, FieldTypes, InputTypes, onBoardingStep, Option, SelectStyle, StepType } from '../../../../../projects/ui-lib/src/lib/types/app';
import { ButtonModule } from 'primeng/button';
import { UiCardComponent, UiInputComponent, UiTextareaComponent } from '../../../../../projects/ui-lib/src/public-api';
import { StepsModule } from 'primeng/steps';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiSelectComponent } from '../../../../../projects/ui-lib/src/lib/components/inputs/ui-select/ui-select.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-on-boarding',
  imports: [UiCardComponent,CommonModule, UiSelectComponent, UiInputComponent, UiTextareaComponent, ButtonModule, StepsModule, ReactiveFormsModule],
  templateUrl: './on-boarding.component.html',
  styleUrl: './on-boarding.component.scss'
})
export class OnBoardingComponent {
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      signUp: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      }),
      personalInformation: this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        dateOfBirth: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        address: ['', [Validators.required]],
      }),
      educationInformation: this.fb.group({
        school: ['', [Validators.required]],
        graduationYear: ['', [Validators.required]],
        gpa: ['', [Validators.required]],
        intendedMajor: ['', [Validators.required]],
        secondaryMajor: ['', [Validators.required]],
        extracurricularActivities: ['', [Validators.required]],
      }),
    });
  }
  public onBoadingHeader: string = 'Student Onboarding';
  public onBoadingSubHeader: string = 'Create your student profile';
  public readonly cardTypes = CardTypes;
  public readonly onBoardingStep = onBoardingStep;
  public readonly fieldTypes = FieldTypes;
  public readonly inputTypes = InputTypes;
  public readonly selectStyle = SelectStyle;
  public genderOptions: Option[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];
  public graduationYearOptions: Option[] = [
    { label: '2025', value: '2025' },
    { label: '2024 ', value: '2024' },
    { label: '2023', value: '2023' },
    { label: '2022', value: '2022' },
    { label: '2021', value: '2021' },
    { label: '2020', value: '2020' },
    { label: '2019', value: '2019' },
    { label: '2018', value: '2018' },
    { label: '2017', value: '2017' },
    { label: '2016', value: '2016' },
    { label: '2015', value: '2015' },
    { label: '2014', value: '2014' },
    { label: '2013', value: '2013' },
    { label: '2012', value: '2012' },
    { label: '2011', value: '2011' },
  ];
  form: FormGroup = new FormGroup({});
  steps: StepType[] = [
    {
      label: 'Sign Up'
    },
    {
      label: 'Personal Information'
    },
    {
      label: 'Personal Information'
    },
  ];
  public activeIndex = signal(0);

  ngOnInit() {
    this.form.get('signUp.email')?.valueChanges.subscribe((value) => {
      console.log(this.form.get('signUp.email'))    });
  }
  next() {
    if (this.activeIndex() < this.steps.length - 1) {
      this.activeIndex.update((value) => value + 1);
    }
  }

  prev() {
    if (this.activeIndex() > 0) {
      this.activeIndex.update((value) => value - 1);
    }
  }

  onStepChange(event: any) {
    console.warn(event);
    this.activeIndex.set(event.index);
  }


  getFormErrors() {
    const errors: string[] = [];

    const email = this.form.get('signUp.email');
    const password = this.form.get('signUp.password');
    const confirmPassword = this.form.get('signUp.confirmPassword');

    if (email?.touched && email.dirty) {
      if (email.hasError('required')) {
        errors.push('Email is required');
      }
      if (email.hasError('email')) {
        errors.push('Email is not valid');
      }
    }

    if (password?.touched && password.dirty) {
      if (password.hasError('required')) {
        errors.push('Password is required');
      }
      if (password.hasError('minlength')) {
        errors.push('Password must be at least 8 characters');
      }
    }

    if (confirmPassword?.touched && confirmPassword.dirty) {
      if (confirmPassword.hasError('required')) {
        errors.push('Confirm password is required');
      }
      if (confirmPassword.hasError('minlength')) {
        errors.push('Confirm password must be at least 8 characters');
      }
      if (confirmPassword.value !== password?.value) {
        errors.push('Passwords do not match');
      }
    }

    return errors;
  }

}
