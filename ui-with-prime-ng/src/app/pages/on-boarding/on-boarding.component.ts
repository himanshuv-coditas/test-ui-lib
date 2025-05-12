import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UiSelectComponent } from '../../../../projects/ui-lib/src/lib/components/inputs/ui-select/ui-select.component';
import {
  CardTypes,
  onBoardingStep,
  FieldTypes,
  InputTypes,
  StepType,
  Option,
  SelectStyle,
  OnBoardingForm,
  EducationInformationForm,
} from '../../../../projects/ui-lib/src/lib/types/app';
import {
  UiCardComponent,
  UiInputComponent,
  UiTextareaComponent,
} from '../../../../projects/ui-lib/src/public-api';
import { ErrorsService } from '../../shared/services/errors/errors.service';
import { MessageService } from 'primeng/api';
import { UiToastComponent } from '../../../../projects/ui-lib/src/lib/components/ui-toast/ui-toast.component';
import { debounceTime } from 'rxjs';

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
    UiToastComponent,
  ],
  providers: [MessageService],
  templateUrl: './on-boarding.component.html',
  styleUrl: './on-boarding.component.scss',
})
export class OnBoardingComponent {
  constructor(
    private fb: FormBuilder,
    private formValidationService: ErrorsService,
    private toast: MessageService
  ) {}
  // Top of class
  readonly LOCAL_STORAGE_FORM_KEY = 'multiStepFormData';
  readonly LOCAL_STORAGE_STEP_KEY = 'activeIndex';
  readonly STEP_FORM_KEYS: (keyof OnBoardingForm)[] = [
    'signUp',
    'personalInformation',
    'educationInformation',
  ];
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
    { label: 'Education Information', styleClass: '' },
  ];
  public activeIndex = signal(0);

  get educationArray(): FormArray {
    return this.form.get('educationInformation') as FormArray;
  }

  ngOnInit() {
    this.initForm();
    this.restoreFormState();
    this.markCompletedSteps();
    this.form.valueChanges.pipe(debounceTime(300)).subscribe((formData) => {
      localStorage.setItem('multiStepFormData', JSON.stringify(formData));
    });
  }

  public initForm() {
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

  markCompletedSteps() {
    const stepKeys = this.STEP_FORM_KEYS;
    stepKeys.forEach((key, index) => {
      const control = this.form.get(key);
      if (control && control.valid && index !== this.activeIndex()) {
        this.steps[index].styleClass = 'completed';
      } else {
        this.steps[index].styleClass = '';
      }
    });
  }

  createEducationFormGroup(data?: EducationInformationForm): FormGroup {
    return this.fb.group({
      school: [data?.school || '', [Validators.required]],
      graduationYear: [data?.graduationYear || '', [Validators.required]],
      gpa: [
        data?.gpa || '',
        [Validators.required, Validators.min(0), Validators.max(4)],
      ],
      intendedMajor: [
        data?.intendedMajor || '',
        [Validators.required, Validators.minLength(2)],
      ],
      secondaryMajor: [data?.secondaryMajor || '', [Validators.required]],
      extracurricularActivities: [data?.extracurricularActivities || ''],
    });
  }

  restoreFormState() {
    const savedData = localStorage.getItem(this.LOCAL_STORAGE_FORM_KEY);
    const savedStep =
      Number(localStorage.getItem(this.LOCAL_STORAGE_STEP_KEY)) || 0;

    this.updateActiveIndex(savedStep);

    if (savedData) {
      const data = JSON.parse(savedData);
      this.form.patchValue(data);

      if (Array.isArray(data.educationInformation)) {
        const eduArray = this.educationArray;
        eduArray.clear();
        data.educationInformation.forEach((entry: any) => {
          eduArray.push(this.createEducationFormGroup(entry));
        });
      }
    }
  }

  checkStepCompleted(step: StepType) {
    return step.styleClass === 'completed';
  }

  saveFormState(formData: any) {
    localStorage.setItem(this.LOCAL_STORAGE_FORM_KEY, JSON.stringify(formData));
  }

  resetFormState() {
    localStorage.removeItem(this.LOCAL_STORAGE_FORM_KEY);
    localStorage.removeItem(this.LOCAL_STORAGE_STEP_KEY);
  }

  updateActiveIndex(index: number) {
    this.activeIndex.set(index);
    localStorage.setItem(this.LOCAL_STORAGE_STEP_KEY, index.toString());
  }

  onStepChange(nextIndex: number) {
    if (nextIndex < this.activeIndex()) {
      this.steps[this.activeIndex()].styleClass = ''; // Optional: clear cu
      this.updateActiveIndex(nextIndex);
      return;
    }

    const currentStepKey = this.STEP_FORM_KEYS[this.activeIndex()];
    const currentGroup = this.form.get(currentStepKey) as AbstractControl;
    this.steps[this.activeIndex()].styleClass = 'completed'; // Optional: clear cu

    if (currentGroup.invalid) {
      currentGroup.markAllAsTouched();
      return;
    }

    this.updateActiveIndex(nextIndex);
  }

  getFormErrors(section: string) {
    return this.formValidationService.getFormErrors(this.form, section);
  }

  completeRegistration() {
    this.toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Onboarding completed successfully!',
    });

    this.form.reset();
    this.resetFormArray(this.educationArray);
    this.educationArray.push(this.createEducationFormGroup());
    this.updateActiveIndex(0);
    this.resetFormState();
    this.markCompletedSteps();
  }

  resetFormArray(array: FormArray) {
    while (array.length > 0) {
      array.removeAt(0);
    }
  }

  addEducationEntry() {
    this.educationArray.push(this.createEducationFormGroup());
  }

  removeEducationEntry(index: number) {
    if (this.educationArray.length > 1) {
      this.educationArray.removeAt(index);
    }
  }
}
