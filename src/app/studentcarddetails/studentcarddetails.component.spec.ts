import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcarddetailsComponent } from './studentcarddetails.component';

describe('StudentcarddetailsComponent', () => {
  let component: StudentcarddetailsComponent;
  let fixture: ComponentFixture<StudentcarddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcarddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentcarddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
