import { Component, OnInit } from '@angular/core';
import { AppService, PeriodicElement } from './app.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;


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

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
