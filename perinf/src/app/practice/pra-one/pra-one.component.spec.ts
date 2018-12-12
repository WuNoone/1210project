import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraOneComponent } from './pra-one.component';

describe('PraOneComponent', () => {
  let component: PraOneComponent;
  let fixture: ComponentFixture<PraOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
