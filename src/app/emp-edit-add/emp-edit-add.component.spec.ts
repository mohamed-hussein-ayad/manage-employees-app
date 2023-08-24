import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpEditAddComponent } from './emp-edit-add.component';

describe('EmpEditAddComponent', () => {
  let component: EmpEditAddComponent;
  let fixture: ComponentFixture<EmpEditAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpEditAddComponent]
    });
    fixture = TestBed.createComponent(EmpEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
