import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DateService } from '../../date.service';
import { NasaApiService } from '../../nasa-api.service';
import { Apod } from '../../models/apod.model'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dayspicture',
  templateUrl: './dayspicture.component.html',
  styleUrls: ['./dayspicture.component.scss']
})
export class DayspictureComponent implements OnInit, OnDestroy {
  private picture$: Subscription = new Subscription();
  public picture: Apod | null = null;
  public date = new FormControl((new Date()));

  constructor(
    private nasaApiService: NasaApiService,
    private dateService: DateService,
    ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.picture$.unsubscribe();
  }

  public getPicture(): void {
    const date: Date = new Date(this.date.value)
    const formatDate = this.dateService.formatDate(date);
    const request = this.nasaApiService.getPictureOfTheDay(formatDate).subscribe((picture: Apod) => {
      this.picture = picture;
    });
    
    this.picture$.add(request);
  }

}
