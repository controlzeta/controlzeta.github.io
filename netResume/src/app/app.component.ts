import { Component } from '@angular/core';
import { fadeInAnimation, staggerContainer } from './core/animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation, staggerContainer]
})
export class AppComponent {
  title = 'netResume';
}
