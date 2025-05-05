import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFormFieldsComponent } from './ui-form-fields.component';

describe('UiFormFieldsComponent', () => {
  let component: UiFormFieldsComponent;
  let fixture: ComponentFixture<UiFormFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFormFieldsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFormFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
