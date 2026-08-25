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
            title: 'Teocuitla: Intelligent Concurrent Price Scraping & Analytics Engine',
            category: 'Enterprise Scraping & Data Pipelines',
            description: 'Designed and engineered a high-performance, multi-threaded price scraping and market intelligence engine in .NET 9, developed using advanced AI assistance (Google Gemini & Antigravity). Built a concurrent background service (IHostedService) utilizing Selenium Headless and HtmlAgilityPack. Features intelligent proxy rotation, adaptive anti-bot bypass mechanisms (Cloudflare, Akamai), and an automated DOM heuristic learner to dynamically rebuild broken XPath/JSON-LD selectors. Data persistence layer is optimized using EF Core 9 with clustered indices for time-series queries.',
            tech: ['.NET 9', 'Blazor Server', 'Entity Framework Core 9', 'SQL Server / SQLite', 'HtmlAgilityPack', 'Selenium Headless', 'Worker Service', 'AI Development (Gemini/Antigravity)'],
            impact: 'Enabled 24/7 autonomous monitoring of millions of data points across dynamic web platforms, reducing scraping failures by 90% via automated selector learning.',
            link: 'https://github.com/controlzeta/Teocuitla',
            image: 'assets/images/projects/teocuitla.png'
        },
        {
            title: 'Tomin: High-Security Premium Financial Web Platform',
            category: 'Clean Architecture & Financial Platforms',
            description: 'Architected a premium visual and administrative financial web application in .NET 9 using Blazor WebApp (InteractiveServer), accelerated by AI pair programming (Google Gemini & Antigravity). Adhered to Clean Architecture and Generic Repository patterns with EF Core. Engineered a custom Privacy Mode featuring visual blurring and math-deduction blocking for sensitive fields. Implemented credentials lifecycle security using BCrypt, automatic audit logging, and custom glassmorphic UI via MudBlazor.',
            tech: ['.NET 9', 'Blazor WebApp', 'Clean Architecture', 'Entity Framework Core', 'SQL Server', 'BCrypt Security', 'MudBlazor / Material 3', 'AI Development (Gemini/Antigravity)'],
            impact: 'Delivered 100% compliance with financial auditing and data masking standards while accelerating page loads by 40% using interactive server-side rendering.',
            link: 'https://github.com/controlzeta/tomin',
            image: 'assets/images/projects/tomin.png'
        },
        {
            title: 'Kukuna: Smart Enterprise Resource Planning WebUI',
            category: 'Multi-Tier Architecture & Blazor Server',
            description: 'Built a multi-tier smart resource planning and automated shopping consolidation system in .NET 9 and Blazor Server, architected and coded using advanced AI (Google Gemini & Antigravity). Designed a transient database context strategy for SQL Server to handle high-frequency concurrent operations safely in Blazor. Configured robust Serilog event tracking, subpath hosting strategies under /Kukuna, and drag-and-drop interactive sorting UI using MudBlazor.',
            tech: ['.NET 9', 'Blazor Server', 'Entity Framework Core', 'SQL Server', 'Serilog Logging', 'MudBlazor UI', 'MudDragAndDrop', 'AI Development (Gemini/Antigravity)'],
            impact: 'Reduced resource waste by 25% by automating ingredient consolidation and store layout mapping, optimizing load time and execution safety via transient DB contexts.',
            link: 'https://github.com/controlzeta/kukuna',
            image: 'assets/images/projects/kukuna.png'
        },
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
            title: 'Teocuitla: Motor Inteligente y Concurrente de Scraping de Precios',
            category: 'Web Scraping y Pipelines de Datos Concurrentes',
            description: 'Diseñé y construí un motor de scraping de precios e inteligencia competitiva en .NET 9 de alto rendimiento y ejecución multihilo, desarrollado con asistencia de IA avanzada (Google Gemini y Antigravity). Desarrollé un servicio de Windows en segundo plano (IHostedService) con Selenium Headless y HtmlAgilityPack. Cuenta con rotación inteligente de proxies, evasión adaptativa de sistemas anti-bot (Cloudflare, Akamai) y un extractor heurístico que aprende y reconstruye selectores XPath de forma automática. Base de datos estructurada con índices agrupados en EF Core 9.',
            tech: ['.NET 9', 'Blazor Server', 'Entity Framework Core 9', 'SQL Server / SQLite', 'HtmlAgilityPack', 'Selenium Headless', 'Worker Service', 'Desarrollo con IA (Gemini/Antigravity)'],
            impact: 'Permitió el monitoreo autónomo 24/7 de millones de registros en portales dinámicos, reduciendo fallos de extracción en un 90% mediante aprendizaje automático de selectores.',
            link: 'https://github.com/controlzeta/Teocuitla',
            image: 'assets/images/projects/teocuitla.png'
        },
        {
            title: 'Tomin: Plataforma Financiera Premium de Alta Seguridad',
            category: 'Clean Architecture y Plataformas Financieras',
            description: 'Arquitecté una aplicación web premium de gestión financiera y administrativa en .NET 9 usando Blazor WebApp (InteractiveServer), acelerado mediante programación en pareja con IA (Google Gemini y Antigravity). Diseñada bajo principios de Clean Architecture y Repositorio Genérico con EF Core. Implementé un Modo Privacidad avanzado que ofusca datos y gráficos sensibles para evitar deducciones matemáticas. Incorporé seguridad criptográfica con BCrypt, auditoría automática de transacciones y una interfaz personalizada en MudBlazor.',
            tech: ['.NET 9', 'Blazor WebApp', 'Clean Architecture', 'Entity Framework Core', 'SQL Server', 'BCrypt Security', 'MudBlazor / Material 3', 'Desarrollo con IA (Gemini/Antigravity)'],
            impact: 'Garantizó el 100% de cumplimiento en auditorías transaccionales y enmascaramiento de datos (Privacy Mode), optimizando la velocidad de carga de la interfaz en un 40%.',
            link: 'https://github.com/controlzeta/tomin',
            image: 'assets/images/projects/tomin.png'
        },
        {
            title: 'Kukuna: ERP Inteligente y Planificador de Recursos',
            category: 'Arquitectura N-Capas y Blazor Server',
            description: 'Desarrollé un planificador inteligente de recursos y consolidación automatizada de compras en .NET 9 y Blazor Server bajo arquitectura N-Capas, diseñado y programado utilizando IA avanzada (Google Gemini y Antigravity). Diseñé una estrategia de contextos de base de datos transient en SQL Server para mitigar bloqueos por concurrencia en Blazor, logs estructurados con Serilog y UI interactiva Drag & Drop con MudBlazor.',
            tech: ['.NET 9', 'Blazor Server', 'Entity Framework Core', 'SQL Server', 'Serilog Logging', 'MudBlazor UI', 'MudDragAndDrop', 'Desarrollo con IA (Gemini/Antigravity)'],
            impact: 'Redujo el desperdicio de recursos en un 25% al automatizar la consolidación y mapeo de pasillos físicos, optimizando la velocidad de carga y concurrencia del sistema.',
            link: 'https://github.com/controlzeta/kukuna',
            image: 'assets/images/projects/kukuna.png'
        },
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