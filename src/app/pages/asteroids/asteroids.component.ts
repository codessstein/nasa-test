import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { DateService } from '../../date.service';
import { NasaApiService } from '../../nasa-api.service';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.scss']
})
export class AsteroidsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  
  public startDate: FormControl = new FormControl(new Date());
  public endDate: FormControl = new FormControl(new Date());
  public error: string | null = null;
  public buttonDisabled: boolean = false;
  public submit: boolean = false;
  public loaderView: boolean = false;

  displayedColumns: string[] = [
    'name', 
    'distance', 
    'absolute_magnitude', 
    'is_potentially_hazardous',
    'diameter'
  ];
  dataSource: MatTableDataSource<object> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator| null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private nasaApiService: NasaApiService, private dateService: DateService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getAsteroids(): void {
    const week = 7;
    this.buttonDisabled = true;
    if(this.dateService.daysBetween(this.startDate.value, this.endDate.value) < week) {
      this.loaderView = true;
      
      const range = {
        start: this.dateService.formatDate(new Date(this.startDate.value)),
        end: this.dateService.formatDate(new Date(this.endDate.value)),
      }
      const request = this.nasaApiService.getAsteroids(range).subscribe(async (data: any) => {
        let asteroids: any = [];
        const { near_earth_objects } = data;

        for(let day in near_earth_objects) {
          asteroids = asteroids.concat(near_earth_objects[day]);
        }
        this.loaderView = false;
        this.dataSource = new MatTableDataSource(asteroids);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.buttonDisabled = false;
      });

      this.submit = true;
      this.subscription.add(request);
    } else {
      this.error = 'Range must be a week';
    }
  } 

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public destroyNotifier(): void {
    this.error = null;
    this.buttonDisabled = false;
  }

}

