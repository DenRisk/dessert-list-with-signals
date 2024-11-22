import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountBtnComponent } from './count-btn.component';

describe('CountBtnComponent', () => {
  let component: CountBtnComponent;
  let fixture: ComponentFixture<CountBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
