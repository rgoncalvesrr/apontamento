import { Component } from '@angular/core';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCocktail } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [ MatSlideToggleModule, FontAwesomeModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Apontamentos';
  faCoffee = faCocktail;
}
