import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterbranchComponent } from './betterbranch.component';

describe('BetterbranchComponent', () => {
  let component: BetterbranchComponent;
  let fixture: ComponentFixture<BetterbranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetterbranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetterbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
