import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/forms/register/register.component';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  // separateDialCode = false;
	// SearchCountryField = SearchCountryField;
	// CountryISO = CountryISO;
	// preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.Canada];
	// phoneForm = new FormGroup({
	// 	phone: new FormControl(undefined, [Validators.required])
	// });

	// changePreferredCountries() {
	// 	this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	// }

  phoneNumberControl= new FormControl('',[ Validators.required, Validators.pattern('[0-9]{10}')])
  matcher = new MyErrorStateMatcher();

  
  constructor() {}

  ngOnInit(): void {}

  content = [{
    pageTitleFirstLine: 'Your one stop',
    pageTitleColoredLine: 'digital clinic.',
    pageSubtitle:
      'Transform your practice with our user-friendly interface to provide better patient care.',
  }
  ];
  
  image = [
    {
      doctor: "assets/landing-page-doctor-image.jpg"
    }
  ]
}
