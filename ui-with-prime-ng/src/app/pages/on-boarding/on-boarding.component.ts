import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UiSelectComponent } from '../../../../projects/ui-lib/src/lib/components/inputs/ui-select/ui-select.component';
import { CardTypes, onBoardingStep, FieldTypes, InputTypes, StepType, Option, SelectStyle } from '../../../../projects/ui-lib/src/lib/types/app';
import { UiCardComponent, UiInputComponent, UiTextareaComponent } from '../../../../projects/ui-lib/src/public-api';
import { ErrorsService } from '../../shared/services/errors/errors.service';

@Component({
  selector: 'app-on-boarding',
  imports: [
    UiCardComponent,
    CommonModule,
    UiSelectComponent,
    UiInputComponent,
    UiTextareaComponent,
    ButtonModule,
    StepsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './on-boarding.component.html',
  styleUrl: './on-boarding.component.scss',
})
export class OnBoardingComponent {
  constructor(
    private fb: FormBuilder,
    private formValidationService: ErrorsService
  ) {
    this.form = this.fb.group({
      signUp: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      }),
      personalInformation: this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        phone: ['', [Validators.required, Validators.minLength(10)]],
        dateOfBirth: [
          '',
          [Validators.required, this.formValidationService.minAgeValidator(16)],
        ],
        gender: ['', [Validators.required]],
        address: ['', [Validators.required, Validators.minLength(10)]],
      }),
      educationInformation: this.fb.array([this.createEducationFormGroup()]),
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
    { label: 'Sign Up', styleClass: '' },
    { label: 'Personal Information', styleClass: '' },
    { label: 'Education Information', styleClass: '' }
  ];
  public activeIndex = signal(0);

  get educationArray(): FormArray {
    return this.form.get('educationInformation') as FormArray;
  }

  next() {
    if (this.activeIndex() < this.steps.length - 1) {
      this.steps[this.activeIndex()].styleClass = 'completed';
      this.activeIndex.update((value) => value + 1);
    }
  }

  prev() {
    if (this.activeIndex() > 0) {
      this.steps[this.activeIndex()].styleClass = ''; // Optional: clear current step class
      this.activeIndex.update((value) => value - 1);
    }
  }

  onStepChange(event: number) {
    if (
      event === onBoardingStep.educationInformation ||
      event === onBoardingStep.personalInformation
    ) {

    }
    this.activeIndex.set(event);
  }

  getFormErrors(section: string) {
    return this.formValidationService.getFormErrors(this.form, section);
  }

  completeRegistration() {
    alert('Onboarding completed successfully!');
  }

  createEducationFormGroup(): FormGroup {
    return this.fb.group({
      school: ['', [Validators.required]],
      graduationYear: ['', [Validators.required]],
      gpa: ['', [Validators.required, Validators.min(0), Validators.max(4)]],
      intendedMajor: ['', [Validators.required, Validators.minLength(2)]],
      secondaryMajor: ['', [Validators.required, Validators.minLength(2)]],
      extracurricularActivities: [''],
    });
  }

  addEducationEntry(): void {
    let educationArray = this.form.get('educationInformation') as FormArray;
    educationArray.push(this.createEducationFormGroup());
  }

  removeEducationEntry(index: number): void {
    if (this.educationArray.length > 1) {
      this.educationArray.removeAt(index);
    }
  }
}
