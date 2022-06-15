import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';
import { ValidationService } from 'src/app/services/validationService.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  bioSection: any;
 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private applicationService: ApplicationService ) { 

    this.bioSection = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: ['', Validators.required],
      education_level: ['', Validators.required],
      years_experience: ['', Validators.required],
      cv: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required]

    });



  }

  ngOnInit() {

  }

  submit(): void {
    this.applicationService.create(this.bioSection.getRawValue())
      .subscribe(() => this.router.navigate(['/home'],{state:{message:'Thanks For Your Application'}}));['/']
     //this.router.navigate(['/home'],{state:{message:'Thanks For Your Application'}})
  }

}
