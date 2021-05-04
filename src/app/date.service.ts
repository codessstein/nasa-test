import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  public daysBetween(date1: Date, date2: Date) {
    const ONE_DAY = 1000 * 60 * 60 * 24;

    const differenceMs = Math.abs(date1.valueOf() - date2.valueOf());

    return Math.round(differenceMs / ONE_DAY);
}

  public isGreaterThanToday(date: Date): boolean {
    const today = new Date();
    today.setHours(0,0,0,0);

    return date > today;
  }

  public formatDate(date: Date): string {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }
}
