import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAndPayComponent } from './confirm-and-pay.component';

describe('ConfirmAndPayComponent', () => {
  let component: ConfirmAndPayComponent;
  let fixture: ComponentFixture<ConfirmAndPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmAndPayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmAndPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
