import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AccountModel, Gender, PersonModel, Prefix } from 'src/datamodel/add-patient';
import { RegisterService } from 'src/services/register.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  phoneNumberControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{10}'),
  ]);

  matcher = new MyErrorStateMatcher();

  formData: any = {};

  gender: { gender: Gender }[] = [];
  prefix: { prefix: Prefix }[] = [];

  selectedValue!: string;

  user: PersonModel = new PersonModel();
  account: AccountModel = new AccountModel();

  constructor(private registerservice: RegisterService) {}

  ngOnInit(): void {
    this.masterData()
  }

  labels = [
    { 
      prefix:"Prefix",
      firstName: 'First Name',
      lastName: 'Last Name',
      emailid: 'Email ID',
      dob: 'Date of birth',
      phoneNumber: 'Phone Number',
      gender: 'Gender',
    },
  ];

  placeholders = [
    { 
      prefix: "Choose your prefix",
      firstName: 'Enter your first name',
      lastName: 'Enter your last name',
      emailid: 'Eg - email@example.com',
      dob: 'Choose your date of birth',
      phoneNumber: 'Please enter 10 digit mobile number',
      gender: 'Choose your gender',
    },
  ];

  accountValue = {
    emailId: this.account.emailId,
  };

  personValue = {
    prefix:this.user.prefix ?? '',
    firstName: this.user.firstName ?? '',
    lastName: this.user.lastName ?? '',
    phoneNumber: this.user.phoneNumber ?? '',
    dob: this.user.dob ?? new Date(),
    gender: this.user.gender ?? '',
    account: {
      emailId: this.accountValue.emailId ?? '',
    },
  }

  image = [
    {
      register: "assets/register.jpg"
    }
  ]

  patientValue = {
    person: this.personValue,
  };

  onSubmit() {
    this.registerservice.addPatient(this.patientValue).subscribe(
      (response) => console.log(response, this.personValue),
      (error) => console.log(error)
    );
  }

  Register() {
    // this.accountValue.password = this.generatePassword()
    // this.registerservice.addPatient(this.personValue).subscribe();
  }

  masterData() {
    this.registerservice.getGender().subscribe(
      (data) => {
        this.gender = data;
      },
      (error) => {
        console.error(error);
      }
    );

    this.registerservice.getPrefix().subscribe(
      (data) => {
        this.prefix = data;
      },
      (error) => {
        console.error(error)
      }
    )
  }
}
