import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedReportsComponent } from './published-reports.component';

describe('PublishedReportsComponent', () => {
  let component: PublishedReportsComponent;
  let fixture: ComponentFixture<PublishedReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
