import { trigger, transition, style, animate } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

const contentSlide = [
  trigger('slideInOut', [
    transition(':enter', [
      style({ transform: 'translateY(-100%)' }),
      animate('600ms ease-in', style({ transform: 'translateY(0%)' })),
    ]),
    transition(':leave', [
      animate('800ms ease-in', style({ transform: 'translateY(-100%)' })),
    ]),
  ]),
];
@Component({
  selector: 'app-card-carousal',
  templateUrl: './card-carousal.component.html',
  styleUrls: ['./card-carousal.component.scss'],
  animations: [contentSlide],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCarousalComponent implements OnInit {
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  ngOnInit() {}
  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 2, sm: 3, md: 4, lg: 4, all: 0 },
    load: 3,
    interval: { timing: 5000, initialDelay: 100 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
}
