import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSeeComponent } from './manage-see.component';

describe('ManageSeeComponent', () => {
  let component: ManageSeeComponent;
  let fixture: ComponentFixture<ManageSeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
