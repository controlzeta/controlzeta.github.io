import { Component, OnInit } from '@angular/core';
import { fadeInAnimation, staggerContainer } from './core/animation';


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
}
