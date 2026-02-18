import { Component } from '@angular/core';
import { Experience } from '../../model/Experience.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('collapsed <=> expanded', animate('300ms ease-out'))
    ]),
      trigger('rotateIcon', [
          state('collapsed', style({ transform: 'rotate(0)' })),
          state('expanded', style({ transform: 'rotate(180deg)' })),
          transition('expanded <=> collapsed', animate('300ms ease-out'))
      ])
  ]
})
export class ExperienceComponent {
    experienceEn: Experience[] = [
        {
            year: '2016 - Present',
            company: 'Gonet / CHUBB',
            role: 'Senior Fullstack Developer',
            excerpt: 'Lead developer for financial systems modernization, migrating legacy monoliths to cloud-native .NET / Angular ecosystems. Engineered CI/CD pipelines in Azure DevOps to automate quality gates and deployments. Orchestrated SOA-based compliance integrations (World Check) and optimized high-transaction Oracle databases for risk assessment engines.',
            technologies: ['.NET Core', 'Angular', 'Oracle PL/SQL', 'RESTful APIs', 'SOA', 'Azure DevOps'],
            projects: ["Moody's Rater Implementation", 'World Check Compliance', 'Cloud-Native Migration']
        },
        {
            year: '2020 - 2021',
            company: 'C3llpoint (Freelance)',
            role: 'Lead Fullstack Architect',
            excerpt: 'Designed and deployed a comprehensive insurance management ecosystem using cloud-managed services. Established a robust RESTful API architecture for B2B integrations and managed the full SDLC with .NET Core and SQL Server, focusing on high availability.',
            technologies: ['.NET Core 3.1', 'SQL Server', 'Web API', 'Bootstrap', 'TypeScript'],
            projects: ['Insurance Policy System', 'B2B API Gateway Strategy']
        },
        {
            year: '2015 - 2016',
            company: 'X1 México',
            role: 'Full Stack Web Developer',
            excerpt: 'Specialized in hybrid CMS architectures and custom .NET integrations. Managed Azure App Services and cloud infrastructure, leading the implementation of responsive front-end standards for educational platforms.',
            technologies: ['C#', 'PHP', 'Azure App Services', 'MySQL', 'Modern JavaScript'],
            projects: ['Joomla-.NET Integration', 'Azure Cloud Infrastructure']
        },
        {
            year: '2014 - 2015',
            company: 'Gonet / Consolid',
            role: '.NET Frontend Engineer',
            excerpt: 'Engineered the frontend architecture for high-traffic GDS flight booking engines. Transitioned legacy communication layers to modern API standards, implementing secure identity management and scalable 3-tier architectures.',
            technologies: ['ASP.NET MVC', 'REST/SOA', 'Sabre GDS', 'SQL Server', 'Bootstrap'],
            projects: ['GDS Flight Search Engine', 'Identity Management System']
        },
        {
            year: '2014',
            company: 'Unifin Financiera',
            role: '.NET Migration Specialist',
            excerpt: 'Executed critical legacy migrations from VB 6.0 to modern .NET MVC architectures. Optimized financial reporting performance and paved the way for future cloud readiness using Entity Framework.',
            technologies: ['C#', 'ASP.NET MVC', 'Entity Framework', 'LINQ', 'SQL Server'],
            projects: ['VB6 to .NET Modernization', 'Financial Reporting Optimization']
        },
        {
            year: '2013 - 2014',
            company: 'Indra / INAI',
            role: 'Backend Developer',
            excerpt: 'Developed secure government platforms handling sensitive data. Integrated complex enterprise systems (SAP CRM, OpenText) using SOA principles and OWASP security practices for robust service communication.',
            technologies: ['.NET 4.0', 'NHibernate', 'SOA/SOAP', 'SAP Integration', 'OWASP'],
            projects: ['Data Privacy Platform', 'Enterprise Service Integration']
        },
        {
            year: '2011 - 2013',
            company: 'Camebra',
            role: '.NET Developer',
            excerpt: 'Built e-commerce solutions with secure payment gateway integrations. Gained early experience in component-based UI development and service-oriented communication (WCF), demonstrating a long-standing track record of adapting to evolving web standards.',
            technologies: ['ASP.NET', 'SOA', 'PayPal API', 'Legacy Web Services', 'SQL Server'],
            projects: ['E-commerce Platform', 'Inventory Management System']
        }
    ];

    experienceEs: Experience[] = [
        {
            year: '2016 - Presente',
            company: 'Gonet / CHUBB',
            role: 'Senior Fullstack Developer',
            excerpt: 'Líder técnico en la modernización de sistemas financieros, migrando arquitecturas legadas a ecosistemas cloud-native en .NET y Angular. Lideré el diseño de flujos de CI/CD en Azure DevOps, garantizando el control de calidad mediante despliegues automatizados. Orquesté integraciones bajo principios SOA (World Check) y optimicé bases de datos Oracle de alto rendimiento.',
            technologies: ['.NET Core', 'Angular', 'Oracle PL/SQL', 'APIs RESTful', 'SOA', 'Azure DevOps'],
            projects: ["Implementación de Moody's Rater", 'Cumplimiento World Check', 'Migración a Nube Administrada']
        },
        {
            year: '2020 - 2021',
            company: 'C3llpoint (Freelance)',
            role: 'Lead Fullstack Architect',
            excerpt: 'Diseñé y desplegué un ecosistema integral para la gestión de seguros utilizando servicios administrados en la nube. Definí la arquitectura de APIs RESTful para integraciones B2B y gestioné el ciclo de vida completo (SDLC) con enfoque en escalabilidad.',
            technologies: ['.NET Core 3.1', 'SQL Server', 'Web API', 'Bootstrap', 'TypeScript'],
            projects: ['Sistema de Pólizas de Seguros', 'Estrategia de API Gateway B2B']
        },
        {
            year: '2015 - 2016',
            company: 'X1 México',
            role: 'Full Stack Web Developer',
            excerpt: 'Especialista en arquitecturas híbridas e integraciones personalizadas en .NET. Gestioné infraestructura en Azure (App Services) y lideré la implementación de estándares de front-end moderno para plataformas educativas.',
            technologies: ['C#', 'PHP', 'Azure App Services', 'MySQL', 'JavaScript Moderno'],
            projects: ['Integración Joomla-.NET', 'Administración de Infraestructura en la Nube']
        },
        {
            year: '2014 - 2015',
            company: 'Gonet / Consolid',
            role: '.NET Frontend Engineer',
            excerpt: 'Arquitecto de frontend para motores de búsqueda de vuelos GDS. Evolucioné capas de comunicación hacia estándares modernos de servicios, implementando protocolos de identidad segura y arquitecturas de 3 capas escalables.',
            technologies: ['ASP.NET MVC', 'REST/SOA', 'Sabre GDS', 'SQL Server', 'Bootstrap'],
            projects: ['Motor de Búsqueda GDS', 'Sistema de Gestión de Identidades']
        },
        {
            year: '2014',
            company: 'Unifin Financiera',
            role: 'Especialista en Migración .NET',
            excerpt: 'Ejecuté migraciones críticas de sistemas legados de VB 6.0 a arquitecturas modernas en .NET MVC. Optimicé el rendimiento de reportes financieros y senté las bases para la preparación hacia servicios en la nube.',
            technologies: ['C#', 'ASP.NET MVC', 'Entity Framework', 'LINQ', 'SQL Server'],
            projects: ['Modernización de VB6 a .NET', 'Optimización de Reportes Financieros']
        },
        {
            year: '2013 - 2014',
            company: 'Indra / INAI',
            role: 'Backend Developer',
            excerpt: 'Desarrollé plataformas gubernamentales seguras para el manejo de datos sensibles. Integré sistemas empresariales complejos (SAP CRM, OpenText) utilizando principios de arquitectura orientada a servicios (SOA) y prácticas de seguridad OWASP.',
            technologies: ['.NET 4.0', 'NHibernate', 'SOA/SOAP', 'Integración SAP', 'OWASP'],
            projects: ['Plataforma de Privacidad de Datos', 'Integración de Servicios Empresariales']
        },
        {
            year: '2011 - 2013',
            company: 'Camebra',
            role: '.NET Developer',
            excerpt: 'Construí soluciones de comercio electrónico con integración de pasarelas de pago. Experiencia temprana en desarrollo basado en componentes y comunicación orientada a servicios, demostrando capacidad de adaptación histórica hacia los estándares web actuales.',
            technologies: ['ASP.NET', 'SOA', 'PayPal API', 'Servicios Web Legados', 'SQL Server'],
            projects: ['Plataforma de E-commerce', 'Sistema de Gestión de Inventarios']
        }
    ];

    experiences: Experience[] = window.location.pathname.includes('/es/') ? this.experienceEs : this.experienceEn;

  toggleExp(exp: Experience) {
    exp.isOpen = !exp.isOpen;
  }
}
