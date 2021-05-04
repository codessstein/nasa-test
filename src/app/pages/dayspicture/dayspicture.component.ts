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
  public date = new FormControl(new Date());
  public error: string | null = null; 
  public buttonDisabled: boolean = false;

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
    const date: Date = new Date(this.date.value);
    date.setHours(0,0,0,0);
    this.buttonDisabled = true;

    if(this.dateService.isGreaterThanToday(date)) {
      this.error = 'Date is greater than today';
    } else {
      const formatDate = this.dateService.formatDate(date);
      const request = this.nasaApiService.getPictureOfTheDay(formatDate).subscribe((picture: Apod) => {
        this.picture = picture;
        this.buttonDisabled = false;
      });
      this.picture$.add(request);
    }
  }

  public destroyNotifier(): void {
    this.error = null;
    this.buttonDisabled = false;
  }
}
