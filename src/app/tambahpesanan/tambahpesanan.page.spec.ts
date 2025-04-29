import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TambahpesananPage } from './tambahpesanan.page';

describe('TambahpesananPage', () => {
  let component: TambahpesananPage;
  let fixture: ComponentFixture<TambahpesananPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahpesananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
