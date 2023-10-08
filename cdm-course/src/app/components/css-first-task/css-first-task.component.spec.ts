import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFirstTaskComponent } from './css-first-task.component';

describe('CssFirstTaskComponent', () => {
  let component: CssFirstTaskComponent;
  let fixture: ComponentFixture<CssFirstTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssFirstTaskComponent]
    });
    fixture = TestBed.createComponent(CssFirstTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
