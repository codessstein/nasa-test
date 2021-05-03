import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPlanetComponent } from './submit-planet.component';

describe('SubmitPlanetComponent', () => {
  let component: SubmitPlanetComponent;
  let fixture: ComponentFixture<SubmitPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitPlanetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
