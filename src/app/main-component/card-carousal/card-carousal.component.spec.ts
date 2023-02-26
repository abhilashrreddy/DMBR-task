import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarousalComponent } from './card-carousal.component';

describe('CardCarousalComponent', () => {
  let component: CardCarousalComponent;
  let fixture: ComponentFixture<CardCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCarousalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
