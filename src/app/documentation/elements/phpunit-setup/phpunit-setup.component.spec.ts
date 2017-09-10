import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpunitSetupComponent } from './phpunit-setup.component';

describe('PhpunitSetupComponent', () => {
  let component: PhpunitSetupComponent;
  let fixture: ComponentFixture<PhpunitSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpunitSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpunitSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
