import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockmanagerPage } from './stockmanager.page';

describe('StockmanagerPage', () => {
  let component: StockmanagerPage;
  let fixture: ComponentFixture<StockmanagerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StockmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
