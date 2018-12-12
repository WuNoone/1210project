import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraTwoComponent } from './pra-two.component';

describe('PraTwoComponent', () => {
  let component: PraTwoComponent;
  let fixture: ComponentFixture<PraTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
