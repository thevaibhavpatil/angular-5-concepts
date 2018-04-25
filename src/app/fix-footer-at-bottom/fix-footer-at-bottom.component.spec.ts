import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixFooterAtBottomComponent } from './fix-footer-at-bottom.component';

describe('FixFooterAtBottomComponent', () => {
  let component: FixFooterAtBottomComponent;
  let fixture: ComponentFixture<FixFooterAtBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixFooterAtBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixFooterAtBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
