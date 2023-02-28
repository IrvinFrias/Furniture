import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutShopComponent } from './about-shop.component';

describe('AboutShopComponent', () => {
  let component: AboutShopComponent;
  let fixture: ComponentFixture<AboutShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
