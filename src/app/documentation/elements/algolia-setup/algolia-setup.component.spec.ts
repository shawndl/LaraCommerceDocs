import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoliaSetupComponent } from './algolia-setup.component';

describe('AlgoliaSetupComponent', () => {
  let component: AlgoliaSetupComponent;
  let fixture: ComponentFixture<AlgoliaSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoliaSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoliaSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
