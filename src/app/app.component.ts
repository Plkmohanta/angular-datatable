import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService, DataModel } from './app.service';
import {  MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'url', 'thumbnailUrl'];
  dataSource:MatTableDataSource<DataModel>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private appService: AppService) { 
  }

  ngOnInit() {
    this.appService.getAllData().subscribe(
      res => {
        this.dataSource = new MatTableDataSource<DataModel>(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      err => console.log(err)
    );

  }
  cellClicked(element) {
    console.log(this.dataSource);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  dataSaved(){
    alert('saved')
  }
  
}
