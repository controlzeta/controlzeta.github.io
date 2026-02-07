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
            role: 'Senior Fullstack Developer', // Elevado para reflejar la antigüedad
            excerpt: 'Lead developer for financial systems modernization, migrating legacy monoliths to .NET Core/Angular ecosystems. Orchestrated critical compliance integrations (World Check) and optimized high-transaction Oracle databases for risk assessment engines.',
            technologies: ['.NET Core', 'Angular', 'Oracle PL/SQL', 'Web API', 'WCF', 'DevOps'],
            projects: ["Moody's Rater Implementation", 'World Check Compliance', 'Legacy System Migration']
        },
        {
            year: '2020 - 2021',
            company: 'C3llpoint (Freelance)',
            role: 'Lead Fullstack Architect',
            excerpt: 'Designed and deployed a comprehensive insurance management ecosystem from scratch. Established the API architecture for B2B integrations and managed the full SDLC using .NET Core 3.1 and SQL Server.',
            technologies: ['.NET Core 3.1', 'SQL Server', 'REST APIs', 'Bootstrap', 'KnockoutJS'],
            projects: ['Insurance Policy System', 'B2B API Gateway Strategy']
        },
        {
            year: '2015 - 2016',
            company: 'X1 México',
            role: 'Full Stack Web Developer',
            excerpt: 'Specialized in hybrid CMS architectures and custom .NET integrations. Managed Azure cloud infrastructure configurations and led the implementation of responsive front-end standards for educational platforms.',
            technologies: ['C#', 'PHP', 'Azure', 'MySQL', 'Joomla/WordPress'],
            projects: ['Joomla-.NET Integration', 'Azure Infrastructure Management']
        },
        {
            year: '2014 - 2015',
            company: 'Gonet / Consolid',
            role: '.NET Frontend Engineer',
            excerpt: 'Engineered the frontend architecture for high-traffic GDS flight booking engines (Sabre, Navitaire). Implemented secure identity management protocols and 3-tier architectures for scalability.',
            technologies: ['ASP.NET MVC', 'WCF', 'Sabre GDS', 'SQL Server', 'Bootstrap'],
            projects: ['GDS Flight Search Engine', 'Identity Management System']
        },
        {
            year: '2014',
            company: 'Unifin Financiera',
            role: '.NET Migration Specialist',
            excerpt: 'Executed critical legacy migrations from VB 6.0 to modern .NET MVC 4 architectures. Optimized financial reporting performance using Entity Framework and complex LINQ queries.',
            technologies: ['C#', 'ASP.NET MVC', 'Entity Framework', 'Crystal Reports', 'SQL Server'],
            projects: ['VB6 to .NET Migration', 'Financial Reporting Optimization']
        },
        {
            year: '2013 - 2014',
            company: 'Indra / INAI',
            role: 'Backend Developer',
            excerpt: 'Developed secure government platforms handling sensitive data privacy complaints. Integrated complex enterprise systems (SAP CRM, OpenText) using robust SOAP/WCF standards and OWASP security practices.',
            technologies: ['.NET 4.0', 'NHibernate', 'SOAP Services', 'SAP Integration', 'OWASP'],
            projects: ['Data Privacy Platform', 'SAP CRM Integration']
        },
        {
            year: '2011 - 2013',
            company: 'Camebra',
            role: '.NET Developer',
            excerpt: 'Built and maintained e-commerce solutions with secure payment gateway integrations (PayPal). Developed rich internet applications using Silverlight and WCF services.',
            technologies: ['ASP.NET', 'WCF', 'PayPal API', 'Silverlight', 'SQL Server'],
            projects: ['E-commerce Platform', 'Inventory Management System']
        }
    ];

    experienceEs: Experience[] = [
        {
            year: '2016 - Presente',
            company: 'Gonet / CHUBB',
            role: 'Senior Fullstack Developer',
            excerpt: 'Líder técnico en la modernización de sistemas financieros, migrando arquitecturas monolíticas legadas a ecosistemas modernos en .NET Core y Angular. Orquesté la integración de módulos críticos de cumplimiento (World Check) y optimicé bases de datos Oracle de alto rendimiento para motores de evaluación de riesgos.',
            technologies: ['.NET Core', 'Angular', 'Oracle PL/SQL', 'Web API', 'WCF', 'DevOps'],
            projects: ["Implementación de Moody's Rater", 'Cumplimiento World Check', 'Migración de Sistemas Legados']
        },
        {
            year: '2020 - 2021',
            company: 'C3llpoint (Freelance)',
            role: 'Lead Fullstack Architect',
            excerpt: 'Diseñé y desplegué desde cero un ecosistema integral para la gestión de seguros. Definí la arquitectura de APIs para integraciones B2B y gestioné el ciclo de vida completo del desarrollo (SDLC) utilizando .NET Core 3.1 y SQL Server.',
            technologies: ['.NET Core 3.1', 'SQL Server', 'REST APIs', 'Bootstrap', 'KnockoutJS'],
            projects: ['Sistema de Pólizas de Seguros', 'Estrategia de API Gateway B2B']
        },
        {
            year: '2015 - 2016',
            company: 'X1 México',
            role: 'Full Stack Web Developer',
            excerpt: 'Especialista en arquitecturas híbridas de CMS e integraciones personalizadas en .NET. Gestioné configuraciones de infraestructura en la nube (Azure) y lideré la implementación de estándares de diseño responsivo para plataformas educativas.',
            technologies: ['C#', 'PHP', 'Azure', 'MySQL', 'Joomla/WordPress'],
            projects: ['Integración Joomla-.NET', 'Administración de Infraestructura Azure']
        },
        {
            year: '2014 - 2015',
            company: 'Gonet / Consolid',
            role: '.NET Frontend Engineer',
            excerpt: 'Arquitecto de frontend para motores de búsqueda de vuelos GDS de alto tráfico (Sabre, Navitaire). Implementé protocolos de gestión de identidad segura y arquitecturas de 3 capas para garantizar la escalabilidad del sistema.',
            technologies: ['ASP.NET MVC', 'WCF', 'Sabre GDS', 'SQL Server', 'Bootstrap'],
            projects: ['Motor de Búsqueda GDS', 'Sistema de Gestión de Identidades']
        },
        {
            year: '2014',
            company: 'Unifin Financiera',
            role: 'Especialista en Migración .NET',
            excerpt: 'Ejecuté migraciones críticas de sistemas legados de VB 6.0 a arquitecturas modernas en .NET MVC 4. Optimicé el rendimiento de reportes financieros mediante Entity Framework y consultas complejas en LINQ.',
            technologies: ['C#', 'ASP.NET MVC', 'Entity Framework', 'Crystal Reports', 'SQL Server'],
            projects: ['Migración VB6 a .NET', 'Optimización de Reportes Financieros']
        },
        {
            year: '2013 - 2014',
            company: 'Indra / INAI',
            role: 'Backend Developer',
            excerpt: 'Desarrollé plataformas gubernamentales seguras para el manejo de denuncias de privacidad de datos. Integré sistemas empresariales complejos (SAP CRM, OpenText) utilizando estándares robustos de SOAP/WCF y prácticas de seguridad OWASP.',
            technologies: ['.NET 4.0', 'NHibernate', 'Servicios SOAP', 'Integración SAP', 'OWASP'],
            projects: ['Plataforma de Privacidad de Datos', 'Integración SAP CRM']
        },
        {
            year: '2011 - 2013',
            company: 'Camebra',
            role: '.NET Developer',
            excerpt: 'Construí y mantuve soluciones de comercio electrónico con integración segura de pasarelas de pago (PayPal). Desarrollé aplicaciones de internet enriquecidas (RIA) utilizando Silverlight y servicios WCF.',
            technologies: ['ASP.NET', 'WCF', 'PayPal API', 'Silverlight', 'SQL Server'],
            projects: ['Plataforma de E-commerce', 'Sistema de Gestión de Inventarios']
        }
    ];

    experiences: Experience[] = window.location.pathname.includes('/es/') ? this.experienceEs : this.experienceEn;

  toggleExp(exp: Experience) {
    exp.isOpen = !exp.isOpen;
  }
}
