import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TambahcustomerPage } from './tambahcustomer.page';

describe('TambahcustomerPage', () => {
  let component: TambahcustomerPage;
  let fixture: ComponentFixture<TambahcustomerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahcustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
