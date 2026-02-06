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
    ])
  ]
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      year: '2016 - Present',
      company: 'Gonet / CHUBB',
      role: 'Senior Fullstack Developer',
      excerpt: 'Lead developer for financial systems maintenance and modernization. Orchestrated the migration of legacy services to .NET Core and optimized Oracle/SQL Server procedures.',
      technologies: ['.NET Core', 'WCF', 'Angular', 'Oracle', 'Web API'],
      projects: ["Moody's Rater Implementation", 'World Check Compliance', 'Document Repository Refactor']
    },
    {
      year: '2015 - 2016',
      company: 'X1 México',
      role: 'Full Stack Web Developer',
      excerpt: 'Specialized in CMS setup and custom .NET integrations. Managed Azure server configurations and implemented responsive front-end designs.',
      technologies: ['C#', 'PHP', 'Azure', 'MySQL', 'Bootstrap'],
      projects: ['Joomla-.NET Integration', 'Server Administration']
    }
    // Añade las demás empresas: Consolid, Unifin, INAI, Camebra...
  ];

  toggleExp(exp: Experience) {
    exp.isOpen = !exp.isOpen;
  }
}
