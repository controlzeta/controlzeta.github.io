import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToastMessage {
    text: string;
    type: 'success' | 'error' | 'info';
}

@Injectable({ providedIn: 'root' })
export class ToastService {
    private toastSubject = new Subject<ToastMessage | null>();
    toastState$ = this.toastSubject.asObservable();

    show(text: string, type: 'success' | 'error' | 'info' = 'success') {
        this.toastSubject.next({ text, type });

        setTimeout(() => {
            this.toastSubject.next(null);
        }, 3000);
    }
}