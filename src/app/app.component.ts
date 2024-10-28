import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MeetingComponent } from "./components/meeting/meeting.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeetingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public dialog: MatDialog) {};
  title = 'dmohammad_resume';

  // Method to open the dialog
  openDialog(): void {
    const dialogRef = this.dialog.open(MeetingComponent, {
      width: '400px', // You can set width/height here
    });

    // Handle dialog close event (optional)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // You can handle any data here that was returned from the dialog, if needed
    });
  }
}
