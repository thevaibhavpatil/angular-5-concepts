import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssExamplesComponent } from './scss-examples.component';

describe('ScssExamplesComponent', () => {
  let component: ScssExamplesComponent;
  let fixture: ComponentFixture<ScssExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScssExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
