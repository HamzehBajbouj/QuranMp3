import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {

  constructor(private router: Router){

  }
  searchReciter(queryValue: string) {
    this.router.navigate(['/reciters'], { queryParams: { search: queryValue } });
  }
}
