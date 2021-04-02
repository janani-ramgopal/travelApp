import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMyJourneyComponent } from './plan-my-journey.component';

describe('PlanMyJourneyComponent', () => {
  let component: PlanMyJourneyComponent;
  let fixture: ComponentFixture<PlanMyJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanMyJourneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanMyJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
