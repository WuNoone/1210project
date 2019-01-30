import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraFiveComponent } from './pra-five.component';

describe('PraFiveComponent', () => {
  let component: PraFiveComponent;
  let fixture: ComponentFixture<PraFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
