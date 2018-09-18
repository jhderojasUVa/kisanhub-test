// Component wich generates "the form" to select from and when
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectorcomponent',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent {
  // Selector component

  // I don't know if it will be necesary to put or to take the places and the metrics for an external source
  // so I have hard-coded on the view, but, for example if needed it can be
  // puted in an array or fetching in an external service or whatever

  // Creating the array
  public years = new Array();
  // Showing or not showing the years to filter
  public showYears: boolean = false;

  constructor() {
    // No constructor needed
  }

  ngOnInit() {
    // Nothing on init the component
  }

  putTheYears(ev): void {
    // Emiter return function
    // ev = the data sended by the child component (the event itself)
    // Contains the initYear and the finishYear
    for (let i = ev.initYear; i <= ev.finishYear; i++) {
      // We add the years to the year array
      this.years.push(i);
      // Whe change the boolean to true for showing the year materal select
      this.showYears = true;
    }
  }

}
