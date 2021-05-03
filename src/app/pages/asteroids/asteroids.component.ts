import { AfterViewInit,Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';

import { DateService } from '../../date.service';
import { NasaApiService } from '../../nasa-api.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.scss']
})
export class AsteroidsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  
  public startDate: FormControl = new FormControl(new Date());
  public endDate: FormControl = new FormControl(new Date());

  public submit: boolean = false;

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

      this.dataSource = new MatTableDataSource(asteroids);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.submit = true; 
    this.subscription.add(request);
  } 

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

