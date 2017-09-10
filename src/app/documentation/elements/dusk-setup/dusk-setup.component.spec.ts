import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuskSetupComponent } from './dusk-setup.component';

describe('DuskSetupComponent', () => {
  let component: DuskSetupComponent;
  let fixture: ComponentFixture<DuskSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuskSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuskSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
