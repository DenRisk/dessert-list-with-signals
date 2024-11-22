import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartBtnComponent } from './add-cart-btn.component';

describe('AddCartBtnComponent', () => {
  let component: AddCartBtnComponent;
  let fixture: ComponentFixture<AddCartBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCartBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCartBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
