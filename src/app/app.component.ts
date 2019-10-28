import { Component, OnInit } from '@angular/core';
import { AppService, PeriodicElement } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement;

  constructor(private appService: AppService) { }
  ngOnInit() {
    this.appService.getAllData().subscribe(
      res => {
        this.dataSource = res;

      },
      err => console.log(err)
    );
  }
  cellClicked(element) {
    console.log(this.dataSource);

  }
}
