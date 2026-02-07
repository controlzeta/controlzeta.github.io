import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInUp', [
  transition(':enter', [
    // Estado inicial: Invisible y un poco más abajo
    style({ opacity: 0, transform: 'translateY(20px)' }),
    // Animación: 600ms con una curva de salida suave
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const staggerContainer = trigger('staggerContainer', [
  transition(':enter', [
    query('.animate-item', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(100, [ // Retraso de 100ms entre cada elemento
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);
