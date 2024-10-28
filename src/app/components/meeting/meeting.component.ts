import { Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';;
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';import { CommonModule } from '@angular/common';

declare var calendar: any;

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BsDatepickerModule,
    TimepickerModule,
    FormsModule],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css',
})
export class MeetingComponent {


  constructor(private elementRef: ElementRef){}

  ngAfterViewInit() {
    const target = this.elementRef.nativeElement.querySelector('#schedule-button');
    window.addEventListener('load', () => {
      // Assuming `calendar` and `schedulingButton` are available globally
      calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1QrYRKOa7yc3fvUyKhOK25jMlNFXHmciAOC4gm3oNIRe5uEFkz4D827Jsw3iLG7rSUqUYGuZPJ?gv=true',
        color: '#616161',
        label: 'Book an appointment',
        target,
      });
    });
  }












  // selectedDate: Date = new Date();  // Default selected date is today
  // startTime: Date = new Date();     // Default start time is current time
  // endTime: Date = new Date();       // Default end time is 30 minutes after start time
  // email: string = '';               // Holds the email input value
  // constructor(public dialogRef: MatDialogRef<MeetingComponent>,private calendarService : GoogleMeetService) {
  //   this.setDefaultTime();
  // }

  // // Set default time to 00:00 for startTime and endTime
  // setDefaultTime() {
  //   this.startTime.setHours(9, 0, 0, 0);  // Set hours, minutes, seconds, and milliseconds to 00:00
  //   this.endTime.setHours(9, 30, 0, 0);    // Set hours, minutes, seconds, and milliseconds to 00:00
  // }

  // // This method will be called whenever the start time changes
  // updateEndTime() {
  //   this.endTime = new Date(this.startTime.getTime() + 30 * 60000);  // Add 30 minutes to start time
  // }

  // // Method to handle the submit action
  // // Method to handle form submission and close dialog
  // onSubmit() {

  //   if (!this.selectedDate || !this.startTime || !this.email) {
  //     alert("Please fill in all fields.");
  //     return;
  //   }

  //   if (this.email && this.validateEmail(this.email)) {
  //     // Show confirmation (you can customize this as needed)
  //     alert(`Meeting Scheduled! \nDate: ${this.selectedDate} \nTime: ${this.startTime} - ${this.endTime} \nEmail: ${this.email}`);


  //      // Prepare the meeting data to be sent to the backend
  //   const startDateTime = new Date(this.selectedDate);
  //   startDateTime.setHours(this.startTime.getHours(), this.startTime.getMinutes());

  //   const endDateTime = new Date(startDateTime);
  //   endDateTime.setMinutes(startDateTime.getMinutes() + 30);

  //     const eventData = {
  //       summary: 'Quick 30-Minute Meeting',
  //       location: 'Virtual Meeting',
  //       description: 'A quick 30-minute meeting scheduled via the app.',
  //       startTime: startDateTime.toISOString(),
  //       endTime: endDateTime.toISOString(),
  //       attendees: [this.email] // Pass the entered email as attendee
  //     };

  //     // Call the backend to create the meeting
  //     this.calendarService.createEvent(eventData).subscribe(
  //       (response) => {
  //         console.log('Event created successfully', response);
  //         alert('Meeting scheduled successfully!');
  //       },
  //       (error) => {
  //         console.error('Error creating meeting', error);
  //         alert('Failed to schedule the meeting. Please try again.');
  //       }
  //     );

  //     // Reset the form fields
  //     this.resetForm();

  //     // Close the dialog
  //     this.dialogRef.close();
  //   } else {
  //     alert('Please enter a valid email.');
  //   }
  // }

  // // Method to reset the form to default values
  // resetForm() {
  //   this.setDefaultTime();     // Reset start time to current time
  //   this.updateEndTime();            // Reset end time to 30 minutes after start time
  //   this.email = '';                 // Clear email field
  // }

  // // Email validation function
  // validateEmail(email: string): boolean {
  //   const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  //   return re.test(String(email).toLowerCase());
  // }

  // // Method to close the dialog manually (optional close button)
  // closeDialog(): void {
  //   this.dialogRef.close();
  // }
}
