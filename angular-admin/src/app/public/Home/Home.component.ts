import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  message: string;

  constructor(private router: Router) { 
    if (this.router.getCurrentNavigation().extras.state === null || this.router.getCurrentNavigation().extras.state === undefined){
      this.message = null;
    }else{
      this.message = this.router.getCurrentNavigation().extras.state.message;
    }
    console.log(this.message);

  }

  ngOnInit() {
  }

}
