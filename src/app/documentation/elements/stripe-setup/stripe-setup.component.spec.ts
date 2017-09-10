import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeSetupComponent } from './stripe-setup.component';

describe('StripeSetupComponent', () => {
  let component: StripeSetupComponent;
  let fixture: ComponentFixture<StripeSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
