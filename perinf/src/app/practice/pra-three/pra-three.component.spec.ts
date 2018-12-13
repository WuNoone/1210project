import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraThreeComponent } from './pra-three.component';

describe('PraThreeComponent', () => {
  let component: PraThreeComponent;
  let fixture: ComponentFixture<PraThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
