import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Skill } from '../../model/Skill.model'; 
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  animations: [
        trigger('staggerCards', [
            transition(':enter', [
                query('.skill-card', [
                    style({ opacity: 0, transform: 'translateY(20px)' }),
                    stagger(50, [
                        animate('400ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
                    ])
                ])
            ])
        ]),
        trigger('tooltipScale', [
            transition(':enter', [
                style({ opacity: 0, transform: 'scale(0.8) translateY(10px)' }),
                animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
            ])
        ])
    ],
})
export class SkillsComponent {
    activeTooltip: string | null = null;
    skillsEn: Skill[] =  [
        // BACKEND & SYSTEMS ARCHITECTURE
        {
            name: '.NET 8 / C#',
            icon: 'devicon-dotnetcore-plain',
            level: 98,
            category: 'backend',
            leadFocus: 'Architecting high-availability distributed systems & strategizing legacy-to-modern migrations.'
        },
        {
            name: 'Apache Camel / Spring Boot',
            icon: 'devicon-apachecamel-plain',
            level: 85,
            category: 'backend',
            leadFocus: 'Orchestrating complex Enterprise Integration Patterns (EIP) for heterogeneous systems.'
        },
        {
            name: 'Microservices & API Gateway',
            icon: 'devicon-azuresqldatabase-plain',
            level: 92,
            category: 'backend',
            leadFocus: 'Designing scalable service meshes and secure API ecosystems for Fintech/Insurtech.'
        },

        // FRONTEND STRATEGY
        {
            name: 'Angular 18 / TypeScript',
            icon: 'devicon-angularjs-plain',
            level: 94,
            category: 'frontend',
            leadFocus: 'Leading frontend modernization with Signals, Standalone Architecture, and optimized SSR.'
        },
        {
            name: 'Tailwind CSS / Material',
            icon: 'devicon-tailwindcss-plain',
            level: 90,
            category: 'frontend',
            leadFocus: 'Standardizing Design Systems and UI consistency across multi-disciplinary squads.'
        },

        // DATABASE & DATA GOVERNANCE
        {
            name: 'SQL Server / Oracle',
            icon: 'devicon-microsoftsqlserver-plain',
            level: 95,
            category: 'database',
            leadFocus: 'Performance tuning and advanced schema design for large-scale financial databases.'
        },
        {
            name: 'Entity Framework Core',
            icon: 'devicon-dotnetcore-plain',
            level: 96,
            category: 'database',
            leadFocus: 'Optimizing Data Access Layers and ensuring ACID compliance in complex transactions.'
        },

        // CLOUD, DEVOPS & MENTORSHIP
        {
            name: 'Azure / Cloud Strategy',
            icon: 'devicon-azure-plain',
            level: 88,
            category: 'cloud',
            leadFocus: 'Leading Infrastructure as Code (IaC) initiatives and driving Cloud-Native adoption.'
        },
        {
            name: 'CI/CD & Azure DevOps',
            icon: 'devicon-azure-plain',
            level: 90,
            category: 'cloud',
            leadFocus: 'Establishing robust delivery pipelines and mentoring teams on DevOps best practices.'
        },
        {
            name: 'Docker / Kubernetes',
            icon: 'devicon-docker-plain',
            level: 82,
            category: 'cloud',
            leadFocus: 'Containerization strategies for seamless deployment and orchestration in production.'
        }
    ];

    skillsEs: Skill[] = [
        // ARQUITECTURA DE BACKEND Y SISTEMAS
        {
            name: '.NET 8 / C#',
            icon: 'devicon-dotnetcore-plain',
            level: 98,
            category: 'backend',
            leadFocus: 'Arquitectura de sistemas distribuidos de alta disponibilidad y estrategia de migración de legacy a moderno.'
        },
        {
            name: 'Apache Camel / Spring Boot',
            icon: 'devicon-apachecamel-plain',
            level: 85,
            category: 'backend',
            leadFocus: 'Orquestación de patrones complejos de integración empresarial (EIP) para sistemas heterogéneos.'
        },
        {
            name: 'Microservicios y API Gateway',
            icon: 'devicon-azuresqldatabase-plain',
            level: 92,
            category: 'backend',
            leadFocus: 'Diseño de mallas de servicios escalables y ecosistemas de API seguros para Fintech e Insurtech.'
        },

        // ESTRATEGIA DE FRONTEND
        {
            name: 'Angular 18 / TypeScript',
            icon: 'devicon-angularjs-plain',
            level: 94,
            category: 'frontend',
            leadFocus: 'Liderazgo en modernización de frontend mediante Signals, arquitectura Standalone y SSR optimizado.'
        },
        {
            name: 'Tailwind CSS / Material',
            icon: 'devicon-tailwindcss-plain',
            level: 90,
            category: 'frontend',
            leadFocus: 'Estandarización de sistemas de diseño y consistencia de UI a través de células multidisciplinarias.'
        },

        // GOBERNANZA DE DATOS Y BASES DE DATOS
        {
            name: 'SQL Server / Oracle',
            icon: 'devicon-microsoftsqlserver-plain',
            level: 95,
            category: 'database',
            leadFocus: 'Optimización de rendimiento y diseño de esquemas avanzados para bases de datos financieras a gran escala.'
        },
        {
            name: 'Entity Framework Core',
            icon: 'devicon-dotnetcore-plain',
            level: 96,
            category: 'database',
            leadFocus: 'Optimización de capas de acceso a datos y garantía de cumplimiento ACID en transacciones complejas.'
        },

        // NUBE, DEVOPS Y MENTORÍA
        {
            name: 'Azure / Estrategia Cloud',
            icon: 'devicon-azure-plain',
            level: 88,
            category: 'cloud',
            leadFocus: 'Liderazgo en iniciativas de Infraestructura como Código (IaC) e impulso de la adopción de Cloud-Native.'
        },
        {
            name: 'CI/CD y Azure DevOps',
            icon: 'devicon-azure-plain',
            level: 90,
            category: 'cloud',
            leadFocus: 'Establecimiento de pipelines de entrega robustos y mentoría a equipos en mejores prácticas de DevOps.'
        },
        {
            name: 'Docker / Kubernetes',
            icon: 'devicon-docker-plain',
            level: 82,
            category: 'cloud',
            leadFocus: 'Estrategias de contenerización para el despliegue sin fisuras y orquestación en entornos de producción.'
        }
    ];

    skills: Skill[] = window.location.pathname.includes('/es/') ? this.skillsEs : this.skillsEn;

    selectedCategory: string = 'all';

    get filteredSkills() {
        return this.selectedCategory === 'all'
            ? this.skills
            : this.skills.filter(s => s.category === this.selectedCategory);
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        const cards = document.querySelectorAll('.skill-card');
        cards.forEach((card: any) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            // Aplicamos una rotación sutil basada en la posición del mouse
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        const cards = document.querySelectorAll('.skill-card');
        cards.forEach((card: any) => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
    }

    showTooltip(skillName: string) { this.activeTooltip = skillName; }
    hideTooltip() { this.activeTooltip = null; }
}
