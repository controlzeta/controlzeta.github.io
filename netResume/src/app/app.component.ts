import { Component, OnInit } from '@angular/core';
import { fadeInAnimation, staggerContainer } from './core/animation';
import { ToastService } from './core/toast.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [fadeInAnimation, staggerContainer]
})
export class AppComponent implements OnInit {
    title = 'netResume';
    year = new Date().getFullYear();
    expandedExp: boolean = false;
    currentLanguge: string = 'en';
    private readonly encodedEmail: string = '';
    constructor(private toastService: ToastService) {
        this.encodedEmail = 'ZnJhbmNpc2NvLmEuYXJyb3lvQGdtYWlsLmNvbQ==';
    }

    ngOnInit() {
        this.currentLanguge = window.location.pathname.includes('/es/') ? 'es' : 'en';
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

}
