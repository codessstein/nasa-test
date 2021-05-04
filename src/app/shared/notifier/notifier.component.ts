import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss']
})
export class NotifierComponent implements OnInit {
  @Input() text: string = '';
  @Output() destroy = new EventEmitter();
  
  destroyAfter: number = 2000;

  constructor() { }

  ngOnInit(): void {
    this.selfDestroy(this.destroyAfter);
  }

  private selfDestroy(time: number): void {
    setTimeout(() => {
      this.destroy.emit();
    }, time)
  }
}
