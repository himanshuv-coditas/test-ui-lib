import { Component, signal } from '@angular/core';
import { CardTypes, FieldTypes, InputTypes, onBoardingStep, SelectStyle, StepType } from '../../../../../projects/ui-lib/src/lib/types/app';
import { ButtonModule } from 'primeng/button';
import { UiCardComponent, UiInputComponent, UiTextareaComponent } from '../../../../../projects/ui-lib/src/public-api';
import { StepsModule } from 'primeng/steps';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiSelectComponent } from '../../../../../projects/ui-lib/src/lib/components/inputs/ui-select/ui-select.component';

@Component({
  selector: 'app-on-boarding',
  imports: [UiCardComponent, UiSelectComponent, UiInputComponent, UiTextareaComponent, ButtonModule, StepsModule, ReactiveFormsModule],
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

  ngOnInit() {}
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
}
