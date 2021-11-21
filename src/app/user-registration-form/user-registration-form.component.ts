import { Component, OnInit, Input } from '@angular/core';

// this import is for closing the dialog on success
import { MatDialogRef } from '@angular/material/dialog'

//this import is bringing in the API calls created in fetch-api-data.service.ts
import { UserRegistrationService } from '../fetch-api-data.service';

//this import is used to display notifs back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: '', Email: '', Birthday: ''};

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  //function responsible for sending the form inputs to the backend
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
  // Logic for a successful user registration (To be implemented)
     this.dialogRef.close(); // This will close the modal on success
     this.snackBar.open(result, 'OK', {
        duration: 2000
     });
    }, (result) => {
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }

}
