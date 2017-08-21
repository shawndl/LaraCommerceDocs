import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationHomeComponent } from './documentation-home.component';

describe('DocumentationHomeComponent', () => {
  let component: DocumentationHomeComponent;
  let fixture: ComponentFixture<DocumentationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
