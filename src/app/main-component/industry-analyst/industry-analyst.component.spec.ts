import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryAnalystComponent } from './industry-analyst.component';

describe('IndustryAnalystComponent', () => {
  let component: IndustryAnalystComponent;
  let fixture: ComponentFixture<IndustryAnalystComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryAnalystComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
