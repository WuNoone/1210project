import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToGenerateLinksComponent } from './to-generate-links.component';

describe('ToGenerateLinksComponent', () => {
  let component: ToGenerateLinksComponent;
  let fixture: ComponentFixture<ToGenerateLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToGenerateLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToGenerateLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
