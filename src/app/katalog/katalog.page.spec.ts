import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KatalogPage } from './katalog.page';

describe('KatalogPage', () => {
  let component: KatalogPage;
  let fixture: ComponentFixture<KatalogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KatalogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
