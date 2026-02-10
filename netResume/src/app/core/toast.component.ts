import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, ToastMessage } from './toast.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-toast',
    standalone: true,
    imports: [CommonModule],
    template: `
    @if (message$ | async; as msg) {
      <div [@slideInOut] [class]="'toast-container ' + msg.type">
        <div class="toast-content">
          <span>{{ msg.text }}</span>
        </div>
      </div>
    }
  `,
    styles: [`
    .toast-container {
      position: fixed; top: 20px; right: 20px; z-index: 9999;
      min-width: 250px; padding: 1rem; border-radius: 12px;
      backdrop-blur: 10px; border: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
    }
    .success { @apply bg-slate-900; border-left: 4px solid #7832be; color: white; }
    .toast-content { font-family: 'monospace'; font-size: 12px; }
  `],
    animations: [
        trigger('slideInOut', [
            transition(':enter', [
                style({ transform: 'translateX(100%)', opacity: 0 }),
                animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
            ]),
            transition(':leave', [
                animate('200ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 }))
            ])
        ])
    ]
})
export class ToastComponent {
    message$ = this.toastService.toastState$;
    constructor(private toastService: ToastService) { }
}