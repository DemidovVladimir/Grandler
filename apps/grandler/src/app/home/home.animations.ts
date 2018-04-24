import { animate, state, style, transition, trigger } from '@angular/animations';

export const mouseHoverTrigger = trigger('mouseHover', [
  state('default', style({
    transform: 'scale(1)'
  })),
  state('increase', style({
  })),
  transition('default => increase', [
    animate('600ms 100ms ease-out', style({
      transform: 'scale(1.1)'
    })),
    animate(300)
  ])
]);
