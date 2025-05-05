import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaftarcustomerPage } from './daftarcustomer.page';

describe('DaftarcustomerPage', () => {
  let component: DaftarcustomerPage;
  let fixture: ComponentFixture<DaftarcustomerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarcustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
