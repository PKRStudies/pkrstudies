import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alerts',
  templateUrl: './warning-alerts.component.html',
  styles: [`
  .warning { padding:20px;
            background-color: #ffc107;
       color: red }`], 
})
export class WarningAlertsComponent {
  allowButton : boolean = true;
  constructor() {
    setTimeout(() => {
      this.allowButton = false;
    }, 2000)
  }
}
