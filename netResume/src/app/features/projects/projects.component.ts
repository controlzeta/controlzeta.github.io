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
            category: 'Minería de Datos y Automatización',
            description: 'Diseño e implementación de un motor de web scraping de alto rendimiento (PriceCrawler) para monitorear tendencias del mercado de hardware. Arquitecturé un pipeline de datos robusto que automatiza la extracción, normalización y predicción visual de precios.',
            tech: ['C#', 'Selenium', 'Chrome Driver', 'SQL Server', 'Chart.js'],
            impact: 'Automatización del 100% de las tareas de investigación de mercado, proporcionando analíticas de precios competitivos en tiempo real mediante dashboards interactivos.',
            link: 'http://pakoarroyo.controlzeta.com.mx/portfolio.html',
            image: 'assets/images/projects/crawler.png'
        },
        {
            title: 'Automated Social Engagement Engine',
            category: 'Desarrollo de Bots y APIs Sociales',
            description: 'Desarrollo de un sistema automatizado de distribución de contenido (TweetBooty) para Twitter. Implementación de algoritmos de publicación programada y estrategias de atracción de tráfico mediante integraciones fluidas con APIs.',
            tech: ['C#', '.NET', 'Twitter API', 'Task Scheduling', 'JSON'],
            impact: 'Impulso del tráfico orgánico hacia activos digitales mediante la automatización de presencia social constante y patrones de interacción estratégicos.',
            link: 'http://pakoarroyo.controlzeta.com.mx/portfolio.html',
            image: 'assets/images/projects/twitbot.png'
        },
        {
            title: 'Microservicios de Cumplimiento Financiero',
            category: 'Fintech / Cumplimiento',
            description: 'Liderazgo en la transición arquitectónica de módulos financieros legacy a .NET Core en CHUBB. Integración de servicios de cumplimiento global como World Check y calificadores financieros de Moody\'s en el flujo de trabajo core de seguros.',
            tech: ['.NET Core', 'WCF', 'Oracle', 'Web API', 'SOAP'],
            impact: 'Fortalecimiento de los estándares internacionales de cumplimiento y reducción de la deuda técnica en un 30% mediante la modernización de servicios.',
            link: 'https://controlzeta.github.io/',
            image: 'assets/images/projects/compliance.png'
        },
        {
            title: 'Safe-Cloud Document Repository',
            category: 'Almacenamiento en la Nube y Seguridad',
            description: 'Ingeniería de un sistema seguro de almacenamiento y recuperación de documentos para instituciones financieras. Implementación de lógica de permisos personalizada y manejo de datos cifrados para socios de Scotiabank.',
            tech: ['ASP.NET MVC', 'C#', 'SQL Server', 'Estándares de Cifrado'],
            impact: 'Eliminación de errores manuales en el manejo de documentos y optimización de la velocidad de recuperación de miles de registros legales.',
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