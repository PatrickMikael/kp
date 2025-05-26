import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PembayaranPage } from './pembayaran.page';

describe('PembayaranPage', () => {
  let component: PembayaranPage;
  let fixture: ComponentFixture<PembayaranPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PembayaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
