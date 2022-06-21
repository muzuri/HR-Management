import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/app/interfaces/applicant';
import { ApplicationService } from 'src/app/services/application.service';


@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  applicants: Applicant[] = [];
  lastPage: number;

  constructor(private applicationService: ApplicationService ) {
  }

  ngOnInit(): void {
    this.load();

  }

  load(page = 1): void {
    this.applicationService.all(page).subscribe(
      (res: any) => {
        this.applicants = res.data;
        this.lastPage = res.meta.last_page;
      }
    );
  }

}
