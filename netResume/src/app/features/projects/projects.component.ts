import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Project } from '../../model/Project.model'; 

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    animations: [
        trigger('slideAnimation', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateX(50px)' }),
                animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
            ]),
            transition(':leave', [
                animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-50px)' }))
            ])
        ])
    ]
})
export class ProjectsComponent {
    currentIndex = 0;

    projects: Project[] = [
        {
            title: 'Enterprise Price Intelligence Crawler',
            category: 'Data Mining & Automation',
            description: 'Designed and implemented a high-performance web scraping engine (PriceCrawler) to monitor hardware market trends. Engineered a robust data pipeline that automates extraction, normalization, and visual forecasting of pricing data.',
            tech: ['C#', 'Selenium', 'Chrome Driver', 'SQL Server', 'Chart.js'],
            impact: 'Automated 100% of market research tasks, providing real-time competitive pricing analytics through interactive dashboards.',
            link: 'http://pakoarroyo.controlzeta.com.mx/portfolio.html'
        },
        {
            title: 'Automated Social Engagement Engine',
            category: 'Bot Development & Social API',
            description: 'Developed an automated content distribution system (TweetBooty) for Twitter. Implemented scheduled publishing algorithms and traffic-driving strategies through seamless API integrations.',
            tech: ['C#', '.NET', 'Twitter API', 'Task Scheduling', 'JSON'],
            impact: 'Boosted organic traffic to digital assets by automating consistent social presence and engagement patterns.',
            link: 'http://pakoarroyo.controlzeta.com.mx/portfolio.html'
        },
        {
            title: 'Financial Compliance Microservices',
            category: 'Fintech / Compliance',
            description: 'Lead the architectural transition of legacy financial modules to .NET Core at CHUBB. Integrated global compliance services like World Check and Moody’s financial raters into the core insurance workflow.',
            tech: ['.NET Core', 'WCF', 'Oracle', 'Web API', 'SOAP'],
            impact: 'Strengthened international compliance standards and reduced technical debt by 30% through service modernization.',
            link: 'https://controlzeta.github.io/'
        },
        {
            title: 'Safe-Cloud Document Repository',
            category: 'Cloud Storage & Security',
            description: 'Engineered a secure document storage and retrieval system for financial institutions. Implemented custom permission logic and encrypted data handling for Scotiabank partners.',
            tech: ['ASP.NET MVC', 'C#', 'SQL Server', 'Encryption Standards'],
            impact: 'Eliminated manual document handling errors and improved data retrieval speed for thousands of legal records.',
            link: 'https://controlzeta.github.io/'
        }
    ];

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    }
}