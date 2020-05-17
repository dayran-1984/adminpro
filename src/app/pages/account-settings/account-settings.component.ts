import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settingsService: SettingsService ) { }

  ngOnInit(): void {
    this.putCheck();
  }

  changeThemeColor(_theme:string, link: any){
    this.applyCheck(link)
    this._settingsService.applytheme(_theme);
  }

  applyCheck(link: any){
    let selectors: any = document.getElementsByClassName('selector');
    for (const ref of selectors) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  putCheck(){
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this._settingsService.settings.theme;
    for (const ref of selectors) {
      if(ref.getAttribute('data-theme') === theme){
        ref.classList.add('working');
        break;
      }
    }
  }

}
