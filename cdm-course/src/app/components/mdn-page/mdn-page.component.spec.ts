import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdnPageComponent } from './mdn-page.component';

describe('MdnPageComponent', () => {
  let component: MdnPageComponent;
  let fixture: ComponentFixture<MdnPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdnPageComponent]
    });
    fixture = TestBed.createComponent(MdnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
