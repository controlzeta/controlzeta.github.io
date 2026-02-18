import { Component, OnInit } from '@angular/core';
import { fadeInAnimation, staggerContainer } from './core/animation';
import { ToastService } from './core/toast.service';
import { from, zip, timer } from 'rxjs';
import { map, scan, take } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [fadeInAnimation, staggerContainer]
})
export class AppComponent implements OnInit {
    title = 'netResume';
    year = new Date().getFullYear();
    yearsOfExperience = new Date().getFullYear() - 2011;
    expandedExp: boolean = false;
    currentLanguge: string = 'en';
    private readonly encodedEmail: string = '';
    fullText: string = '> Senior Fullstack Engineer';
    typedText: string = '';
    constructor(private toastService: ToastService) {
        this.encodedEmail = 'ZnJhbmNpc2NvLmEuYXJyb3lvQGdtYWlsLmNvbQ==';
    }

    ngOnInit() {
        this.currentLanguge = window.location.pathname.includes('/es/') ? 'es' : 'en';
        this.startTyping();
    }

    toggleExp() {
        this.expandedExp = !this.expandedExp;
    }

    switchLanguage(lang: string) {
        if (this.currentLanguge === lang) return;

        const currentPath = window.location.pathname;

        let newPath = currentPath.replace(`/${this.currentLanguge}/`, `/${lang}/`);

        if (!newPath.includes(`/${lang}/`)) {
            newPath = `/${lang}${currentPath}`;
        }

        window.location.href = newPath;
    }

    contactMe() {
        try {
            const email = atob(this.encodedEmail);

            const subject = encodeURIComponent('Contacto desde Github.io');
            const mailtoUrl = `mailto:${email}?subject=${subject}`;
            this.toastService.show('Abriendo cliente de correo...', 'info');
            window.location.href = mailtoUrl;
        } catch (e) {
            console.error('Error al procesar el contacto:', e);
        }
    }

    startTyping() {
        const charArray = this.fullText.split('');

        zip(
            from(charArray),
            timer(0, 100) // 100ms entre cada letra
        ).pipe(
            map(([char]) => char),
            scan((acc, char) => acc + char, ''),
            take(charArray.length)
        ).subscribe(text => this.typedText = text);
    }

    downloadCV() {
        const link = document.createElement('a');
        link.href = window.location.pathname.includes('/es/') ? 'assets/docs/CV_Francisco_Arroyo.pdf' : 'assets/docs/CV_Francisco_Arroyo_EN.pdf';
        link.download = 'CV_Francisco_Arroyo_TechLead.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }
}
