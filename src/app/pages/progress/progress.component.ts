import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  percent1: number = 20;
  percent2: number = 30;
  legend:string ="Progress Blue";

  constructor() { }

  ngOnInit(): void {
  }

  updateProgress( event:number ){
    this.percent1 = event;
  }

}
