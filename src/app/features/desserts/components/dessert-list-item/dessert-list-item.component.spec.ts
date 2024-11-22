import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertListItemComponent } from './dessert-list-item.component';

describe('DessertListItemComponent', () => {
  let component: DessertListItemComponent;
  let fixture: ComponentFixture<DessertListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DessertListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
