import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationListItemComponent } from './confirmation-list-item.component';

describe('ConfirmationListItemComponent', () => {
  let component: ConfirmationListItemComponent;
  let fixture: ComponentFixture<ConfirmationListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
