import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyNotFoundComponent } from './survey-not-found.component';

describe('SurveyNotFoundComponent', () => {
  let component: SurveyNotFoundComponent;
  let fixture: ComponentFixture<SurveyNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
