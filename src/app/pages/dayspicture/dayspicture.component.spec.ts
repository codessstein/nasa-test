import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayspictureComponent } from './dayspicture.component';

describe('DayspictureComponent', () => {
  let component: DayspictureComponent;
  let fixture: ComponentFixture<DayspictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayspictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayspictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
