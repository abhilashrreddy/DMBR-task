import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
 const contentSlide= [trigger('slideInOut', [
  transition(':enter', [
    style({transform: 'translateX(-100%)'}),
    animate('600ms ease-in', style({transform: 'translateY(0%)'}))
  ]),
  transition(':leave', [
    animate('800ms ease-in', style({transform: 'translateY(-100%)'}))
  ])
])];
const imageSlide= [
  trigger('fadeInOut', [
    transition(':enter',[
      style({
        opacity: 0
      }),
      animate('200ms ease-in', style({
        opacity: 1
      }))
    ]),
    transition(':leave' , [
      style({
        opacity: 1
      }),
      animate('200ms ease-out', style({
        opacity: 0
      }))
    ])
  ])
]
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [ contentSlide,imageSlide
    
  ]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
