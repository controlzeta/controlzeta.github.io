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

    projectsEn: Project[] = [
        {
            title: 'Enterprise Price Intelligence Crawler',
            category: 'Data Mining & Automation',
            description: 'Designed and implemented a high-performance web scraping engine (PriceCrawler) to monitor hardware market trends. Engineered a robust data pipeline that automates extraction, normalization, and visual forecasting of pricing data.',
            tech: ['C#', 'Selenium', 'Chrome Driver', 'SQL Server', 'Chart.js'],
            impact: 'Automated 100% of market research tasks, providing real-time competitive pricing analytics through interactive dashboards.',
            link: 'http://pakoarroyo.controlzeta.com.mx/portfolio.html',
            image: '../assets/images/projects/crawler.png'
        },
        {
            title: 'Automated Social Engagement Engine',
            category: 'Bot Development & Social API',
            description: 'Developed an automated content distribution system (TweetBooty) for Twitter. Implemented scheduled publishing algorithms and traffic-driving strategies through seamless API integrations.',
            tech: ['C#', '.NET', 'Twitter API', 'Task Scheduling', 'JSON'],
            impact: 'Boosted organic traffic to digital assets by automating consistent social presence and engagement patterns.',
            link: 'http://pakoarroyo.controlzeta.com.mx/portfolio.html',
            image: '../assets/images/projects/twitbot.png'
        },
        {
            title: 'Financial Compliance Microservices',
            category: 'Fintech / Compliance',
            description: 'Lead the architectural transition of legacy financial modules to .NET Core at CHUBB. Integrated global compliance services like World Check and Moody\'s financial raters into the core insurance workflow.',
            tech: ['.NET Core', 'WCF', 'Oracle', 'Web API', 'SOAP'],
            impact: 'Strengthened international compliance standards and reduced technical debt by 30% through service modernization.',
            link: 'https://controlzeta.github.io/',
            image: '../assets/images/projects/compliance.png'
        },
        {
            title: 'Safe-Cloud Document Repository',
            category: 'Cloud Storage & Security',
            description: 'Engineered a secure document storage and retrieval system for financial institutions. Implemented custom permission logic and encrypted data handling for Scotiabank partners.',
            tech: ['ASP.NET MVC', 'C#', 'SQL Server', 'Encryption Standards'],
            impact: 'Eliminated manual document handling errors and improved data retrieval speed for thousands of legal records.',
            link: 'https://controlzeta.github.io/',
            image: '../assets/images/projects/documentStorage.png'
        }
    ];

    projectsEs: Project[] = [
        {
            title: 'Enterprise Price Intelligence Crawler',
            category: 'Miner�a de Datos y Automatizaci�n',
            description: 'Dise�o e implementaci�n de un motor de web scraping de alto rendimiento (PriceCrawler) para monitorear tendencias del mercado de hardware. Arquitectur� un pipeline de datos robusto que automatiza la extracci�n, normalizaci�n y predicci�n visual de precios.',
            tech: ['C#', 'Selenium', 'Chrome Driver', 'SQL Server', 'Chart.js'],
            impact: 'Automatizaci�n del 100% de las tareas de investigaci�n de mercado, proporcionando anal�ticas de precios competitivos en tiempo real mediante dashboards interactivos.',
            link: 'http://pakoarroyo.controlzeta.com.mx/portfolio.html',
            image: 'assets/images/projects/crawler.png'
        },
        {
            title: 'Automated Social Engagement Engine',
            category: 'Desarrollo de Bots y APIs Sociales',
            description: 'Desarrollo de un sistema automatizado de distribuci�n de contenido (TweetBooty) para Twitter. Implementaci�n de algoritmos de publicaci�n programada y estrategias de atracci�n de tr�fico mediante integraciones fluidas con APIs.',
            tech: ['C#', '.NET', 'Twitter API', 'Task Scheduling', 'JSON'],
            impact: 'Impulso del tr�fico org�nico hacia activos digitales mediante la automatizaci�n de presencia social constante y patrones de interacci�n estrat�gicos.',
            link: 'http://pakoarroyo.controlzeta.com.mx/portfolio.html',
            image: 'assets/images/projects/twitbot.png'
        },
        {
            title: 'Microservicios de Cumplimiento Financiero',
            category: 'Fintech / Cumplimiento',
            description: 'Liderazgo en la transici�n arquitect�nica de m�dulos financieros legacy a .NET Core en CHUBB. Integraci�n de servicios de cumplimiento global como World Check y calificadores financieros de Moody\'s en el flujo de trabajo core de seguros.',
            tech: ['.NET Core', 'WCF', 'Oracle', 'Web API', 'SOAP'],
            impact: 'Fortalecimiento de los est�ndares internacionales de cumplimiento y reducci�n de la deuda t�cnica en un 30% mediante la modernizaci�n de servicios.',
            link: 'https://controlzeta.github.io/',
            image: 'assets/images/projects/compliance.png'
        },
        {
            title: 'Safe-Cloud Document Repository',
            category: 'Almacenamiento en la Nube y Seguridad',
            description: 'Ingenier�a de un sistema seguro de almacenamiento y recuperaci�n de documentos para instituciones financieras. Implementaci�n de l�gica de permisos personalizada y manejo de datos cifrados para socios de Scotiabank.',
            tech: ['ASP.NET MVC', 'C#', 'SQL Server', 'Est�ndares de Cifrado'],
            impact: 'Eliminaci�n de errores manuales en el manejo de documentos y optimizaci�n de la velocidad de recuperaci�n de miles de registros legales.',
            link: 'https://controlzeta.github.io/',
            image: 'assets/images/projects/documentStorage.png'
        }
    ];

    projects: Project[] = window.location.pathname.includes('/es/') ? this.projectsEs : this.projectsEn;

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    }
}