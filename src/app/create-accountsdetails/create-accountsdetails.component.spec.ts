import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountsdetailsComponent } from './create-accountsdetails.component';

describe('CreateAccountsdetailsComponent', () => {
  let component: CreateAccountsdetailsComponent;
  let fixture: ComponentFixture<CreateAccountsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountsdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
