import { Component } from '@angular/core';
import { ProjectService } from "./services/project.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProjectService]
})
export class AppComponent {
  title = 'app works!';
  userName = 'Joe Smith';

  handleEntryRequest() {
    console.log('Request handled');
  }
}
