import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ToastComponent } from './core/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
  ],
  imports: [
      BrowserModule,
      SkillsComponent,
      ProjectsComponent,
      ToastComponent,
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
      })
  ],
  providers: [
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
