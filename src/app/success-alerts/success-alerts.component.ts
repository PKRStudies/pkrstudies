import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alerts',
  templateUrl: './success-alerts.component.html',
  styleUrls: ['./success-alerts.component.css']
})
export class SuccessAlertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:String = "pradeep";
  date:Date = new Date();

  getDetails(): String {
    return "Databinding::String-Interpolation";
  }
}
