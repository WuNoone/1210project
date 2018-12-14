import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraFourComponent } from './pra-four.component';

describe('PraFourComponent', () => {
  let component: PraFourComponent;
  let fixture: ComponentFixture<PraFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
