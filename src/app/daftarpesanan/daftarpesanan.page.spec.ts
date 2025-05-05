import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaftarpesananPage } from './daftarpesanan.page';

describe('DaftarpesananPage', () => {
  let component: DaftarpesananPage;
  let fixture: ComponentFixture<DaftarpesananPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarpesananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
