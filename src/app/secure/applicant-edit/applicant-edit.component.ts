import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-applicant-edit',
  templateUrl: './applicant-edit.component.html',
  styleUrls: ['./applicant-edit.component.css']
})
export class ApplicantEditComponent implements OnInit {
  bioSection: FormGroup;
  statuses:any = ['Pending','Passed','dropped'];
  id: number;
  cvUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private applicationService: ApplicationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  

    this.bioSection = this.formBuilder.group({
      first_name: '',
      last_name: '',
      age: '',
      education_level: '',
      years_experience: '',
      cv: '',
      country: '',
      city: '',
      email: '',
      status: ''

    });


    this.id = this.route.snapshot.params.id;



    this.applicationService.get(this.id).subscribe(
      applicant => {
        this.bioSection.patchValue({
          first_name: applicant.first_name,
          last_name: applicant.last_name,
          age: applicant.age,
          education_level: applicant.education_level,
          years_experience: applicant.years_experience,
          cv: applicant.cv,
          country: applicant.country,
          city: applicant.city,
          email: applicant.email,
          status: applicant.status
        });
        this.cvUrl = applicant.cv;
      }
    );
  }

  submit(): void {
    console.log(this.id);
    this.applicationService.update(this.id, this.bioSection.getRawValue())
      .subscribe(() => this.router.navigate(['/applicant']));
  }

}
