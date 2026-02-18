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
            description: 'Faced with manual, error-prone market monitoring, I engineered a high-performance scraping engine and data pipeline. I automated the extraction and normalization of hardware pricing, implementing visual forecasting models to track market trends.',
            tech: ['C#', 'Selenium', 'SQL Server', 'Chart.js', 'Data Normalization'],
            impact: 'Achieved 100% automation of market research, delivering real-time competitive intelligence that eliminated manual reporting and accelerated pricing strategy adjustments.',
            link: 'http://pakoarroyo.controlzeta.com.mx/portfolio.html',
            image: 'assets/images/projects/crawler.png'
        },
        {
            title: 'Automated Social Engagement Engine',
            category: 'Bot Development & Social API',
            description: 'To solve the challenge of inconsistent digital presence and low organic reach, I developed an automated content distribution system. I implemented complex scheduling algorithms and seamless API integrations to drive targeted traffic back to digital assets.',
            tech: ['C#', '.NET', 'Twitter API', 'Task Scheduling', 'API Integration'],
            impact: 'Significantly boosted organic traffic and brand visibility by maintaining a 24/7 strategic social presence without requiring manual intervention.',
            link: 'http://pakoarroyo.controlzeta.com.mx/portfolio.html',
            image: 'assets/images/projects/twitbot.png'
        },
        {
            title: 'Financial Compliance Microservices',
            category: 'Fintech / Compliance',
            description: 'Chubb needed to modernize critical compliance workflows restricted by legacy technical debt. I led the architectural migration to .NET Core and orchestrated the integration of global risk assessment services like World Check and Moody’s.',
            tech: ['.NET Core', 'SOA', 'Oracle', 'RESTful APIs', 'Microservices'],
            impact: 'Reduced technical debt by 30% and strengthened international compliance standards, ensuring zero-friction integration for high-stakes risk evaluation.',
            link: 'https://controlzeta.github.io/',
            image: 'assets/images/projects/compliance.png'
        },
        {
            title: 'Safe-Cloud Document Repository',
            category: 'Cloud Storage & Security',
            description: 'Faced with sensitive legal data risks and slow retrieval times for Scotiabank partners, I engineered a secure, encrypted document repository. I designed custom permission logic and high-performance indexing for rapid data access.',
            tech: ['ASP.NET MVC', 'C#', 'SQL Server', 'Encryption Standards', 'Cloud Storage'],
            impact: 'Eliminated manual document handling errors and drastically improved data retrieval speeds for thousands of legal records, ensuring 100% compliance with security protocols.',
            link: 'https://controlzeta.github.io/',
            image: 'assets/images/projects/documentStorage.png'
        }
    ];

    projectsEs: Project[] = [
        {
            title: 'Enterprise Price Intelligence Crawler',
            category: 'Minería de Datos y Automatización',
            description: 'Ante la necesidad de monitorear precios de hardware sin procesos manuales lentos, diseñé un motor de scraping de alto rendimiento. Desarrollé un pipeline de datos para extraer, normalizar y predecir tendencias mediante visualización avanzada.',
            tech: ['C#', 'Selenium', 'SQL Server', 'Chart.js', 'Normalización de Datos'],
            impact: 'Automaticé el 100% de la investigación de mercado, proporcionando inteligencia competitiva en tiempo real que eliminó el error humano en la toma de decisiones de precios.',
            link: 'http://pakoarroyo.controlzeta.com.mx/portfolio.html',
            image: 'assets/images/projects/crawler.png'
        },
        {
            title: 'Automated Social Engagement Engine',
            category: 'Desarrollo de Bots y APIs Sociales',
            description: 'Para resolver la falta de presencia digital constante, desarrollé un sistema de distribución de contenido automatizado. Implementé algoritmos de publicación programada e integraciones con APIs para atraer tráfico estratégico de forma orgánica.',
            tech: ['C#', '.NET', 'Twitter API', 'Programación de Tareas', 'Integración de APIs'],
            impact: 'Incrementé el tráfico orgánico y la visibilidad de marca mediante una presencia social estratégica 24/7, eliminando la necesidad de gestión manual diaria.',
            link: 'http://pakoarroyo.controlzeta.com.mx/portfolio.html',
            image: 'assets/images/projects/twitbot.png'
        },
        {
            title: 'Microservicios de Cumplimiento Financiero',
            category: 'Fintech / Cumplimiento',
            description: 'Con el objetivo de modernizar flujos de cumplimiento críticos en CHUBB limitados por sistemas legacy, lideré la migración arquitectónica a .NET Core. Orquesté la integración de servicios globales de riesgo como World Check y Moody’s.',
            tech: ['.NET Core', 'SOA', 'Oracle', 'APIs RESTful', 'Microservicios'],
            impact: 'Reduje la deuda técnica en un 30% y fortalecí el cumplimiento de estándares internacionales, garantizando una evaluación de riesgos sin fricciones.',
            link: 'https://controlzeta.github.io/',
            image: 'assets/images/projects/compliance.png'
        },
        {
            title: 'Safe-Cloud Document Repository',
            category: 'Almacenamiento en la Nube y Seguridad',
            description: 'Ante los riesgos de seguridad y lentitud en la recuperación de documentos legales para Scotiabank, diseñé un repositorio cifrado de alto rendimiento. Implementé lógica de permisos personalizada y estándares de cifrado bancario.',
            tech: ['ASP.NET MVC', 'C#', 'SQL Server', 'Estándares de Cifrado', 'Cloud Storage'],
            impact: 'Eliminé errores manuales en el manejo de documentos y optimicé la velocidad de recuperación de miles de registros legales, asegurando integridad total de la información.',
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