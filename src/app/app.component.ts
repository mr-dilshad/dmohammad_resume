import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeetingComponent } from "./components/meeting/meeting.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeetingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dmohammad_resume';
}
