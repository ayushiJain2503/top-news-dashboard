import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router) {}

  /**
   * The function to navigate on any user click event
   * @param event
   */
  public navigate(event: string): void {
    this.router.navigate([event]);
  }
}
