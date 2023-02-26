import {
  Transfrom,
  Breakpoints,
  CarouselInterval,
  NguButton,
} from '@ngu/carousel/lib/ngu-carousel/ngu-carousel';

export class NguCarouselStore {
  type: string;
  deviceType: DeviceType;
  token: string;
  items: number;
  load: number;
  deviceWidth: number;
  carouselWidth: number;
  itemWidth: number;
  visibleItems: ItemsControl;
  slideItems: number;
  itemWidthPer: number;
  itemLength: number;
  currentSlide: number;
  easing: string;
  speed: number;
  transform: Transfrom;
  loop: boolean;
  dexVal: number;
  touchTransform: number;
  touch: Touch;
  isEnd: boolean;
  isFirst: boolean;
  isLast: boolean;
  RTL: boolean;
  vertical: Vertical;
}
export type DeviceType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'all';

export class ItemsControl {
  start: number;
  end: number;
}

export class Vertical {
  enabled: boolean;
  height: number;
}

export class Touch {
  active?: boolean;
  swipe: string;
  velocity: number;
}

export class NguCarouselConfig {
  grid: Transfrom;
  gridBreakpoints?: Breakpoints;
  slide?: number;
  speed?: number;
  interval?: CarouselInterval;
  animation?: Animate;
  point?: Point;
  type?: string;
  load?: number;
  custom?: Custom;
  loop?: boolean;
  touch?: boolean;
  easing?: string;
  RTL?: boolean;
  button?: NguButton;
  vertical?: Vertical;
  velocity?: number;
}

export class Grid {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  all: number;
}

export interface Point {
  visible: boolean;
  hideOnSingleSlide?: boolean;
}

export type Custom = 'banner';
export type Animate = 'lazy';
