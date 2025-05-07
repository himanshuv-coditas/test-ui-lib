import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLibComponentComponent } from './ui-lib-component.component';

describe('UiLibComponentComponent', () => {
  let component: UiLibComponentComponent;
  let fixture: ComponentFixture<UiLibComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiLibComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiLibComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
