import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTaskComponent } from './html-task.component';

describe('HtmlTaskComponent', () => {
  let component: HtmlTaskComponent;
  let fixture: ComponentFixture<HtmlTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlTaskComponent]
    });
    fixture = TestBed.createComponent(HtmlTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
