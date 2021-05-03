import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-lang-switch',
  templateUrl: './lang-switch.component.html',
  styleUrls: ['./lang-switch.component.scss']
})
export class LangSwitchComponent implements OnInit {
  public languages = [
    {
      title: 'EN',
      code: 'en',
    },
    {
      title: 'УКР',
      code: 'uk'
    },
    {
      title: 'РУС',
      code: 'ru'
    }
  ] 
  constructor(public translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
}

  ngOnInit(): void {
  }
}
