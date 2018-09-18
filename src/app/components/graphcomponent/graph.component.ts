// Component wich generates the graph

import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

// For the chart!
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

// Importing the service to insert into the constructor
import { FetchService } from '../../services/fetch.service';

@Component({
  selector: 'app-graphcomponent',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  // The workaround for updating the ng2-chart
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  // Reading the inputs
  @Input() public where: string;
  @Input() public whatToSee: string;
  @Input() public initYear: number;
  @Input() public finishYear: number;

  // And the emiter for the outputs
  @Output() public sendTheYears = new EventEmitter();

  // Creating the variable who contains the data
  public allTheData;
  public filteredData;

  // Variables for the chart
  public chartLegend: boolean = true;
  public chartType: string = 'bar';
  // Months array
  public chartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  // Data array
  public chartData: Array<any> = [];

  constructor(private dataService : FetchService) { }

  ngOnInit() {
    // Creating the component not needed
  }

  ngOnChanges() {
    // If the data changes for receiving
    if (this.whatToSee && this.where) {
      // If theres some data let's do de fetch
      this.dataService.getData(this.whatToSee, this.where).subscribe(data => {
        // Pass from an object to an array
        this.allTheData = JSON.parse(JSON.stringify(data));
        // Sending the linit "years" to the parent component (graphcomponent)
        this.sendTheYears.emit({
          initYear: this.allTheData[0]['year'],
          finishYear: this.allTheData[(this.allTheData.length-1)]['year']
        });
        // Filtering the table
        this.filteringTheTable();
        if (this.initYear > 0 && this.finishYear > 0) {
          // Populating the data
          this.populateTheData();
        }
      });
      // This is a patch but a very bad patch for updating ng2-charts
      // with time it can be resolved but I think it's no good more time
      // As I have seen it's a problem with the this.data of the chartjs
      // that gets undefined and don't update the chart, but
      // if you modify things like the labels or the type, the this.data of
      // the chart exists. With more time it can be debugged and solved
      if (this.chart != undefined) {
        // This is for a better displaying the data
        // It can be done in another select but... well, I don't know if it's
        // good or bad, I don't know
        if (this.whatToSee == 'Rainfall') {
          // If select rainfall a line it's good
          this.chartType = 'line';
        } else if (this.whatToSee == 'Tmax' || this.whatToSee == 'Tmin') {
          // If other, I personally preffer the bar one
          this.chartType = 'bar';
        }
        this.chart.chart.update();
      }
    }
  }

  ngAfterViewChecked() {
    // Everytime something changes!
  }

  private filteringTheTable(): void {
    // This function/method filters the data on the "table of data"
    if (this.initYear || this.finishYear) {
      // If there's inityear or finish year
      this.filteredData = this.allTheData.filter(data => data.year == this.initYear || data.year == this.finishYear);
    } else {
      // Show all the data
      this.filteredData = this.allTheData;
    }
  }

  private populateTheData(): void {
    // This function/method is for populating the data (ng2-chart way)
    // The way to do this is easy (of course it can be refactored in something simpler, I know):
    // 1. walk through the years for the begin to end
    // 2. filter the allTheData array with only the dato the year we are walking through
    // 3. Extract the values
    // 4. Fill the chartData with the values and the year as a label

    // We must create a new temporal total data chart because the ng2-chart needs it if
    // you change the data
    let newChartDataArray: any[] = [];
    this.chartData = [];
    for (let i = this.initYear; i <= this.finishYear; i++) {
      let tmpDataArray: any[] = [];
      const tmpArray = this.allTheData.filter(data => data.year == i);
      tmpArray.forEach(data => {
        tmpDataArray.push(data.value);
      });
      newChartDataArray.push({
        data: tmpDataArray,
        label: i
      });
    }
    // Updating the data
    this.chartData = newChartDataArray;
  }

  public chartHovered(e:any):void {
    // We can do something but... I don't know what to show or to do :)
  }

  public chartClicked(e:any):void {
    // We can do something but... II don't know what to show or to do :)
  }
}
