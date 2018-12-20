import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksHistoryComponent } from './links-history.component';

describe('LinksHistoryComponent', () => {
  let component: LinksHistoryComponent;
  let fixture: ComponentFixture<LinksHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
