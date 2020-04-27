import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics1',
  templateUrl: './graphics1.component.html',
  styles: [
  ]
})
export class Graphics1Component implements OnInit {

  graphics: any = {
    'graphic1': {
      'labels': ['With Beans', 'With Custard', 'With Bacon'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'legend': 'The bread is eaten with'
    },
    'graphic2': {
      'labels': ['Men', 'Women'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'legend': 'Interviewees'
    },
    'graphic3': {
      'labels': ['Yes', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'legend': 'Do beans give you gas?'
    },
    'graphic4': {
      'labels': ['No', 'Yes'],
      'data':  [85, 15],
      'type': 'doughnut',
      'legend': 'Do you mind being gassed?'
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

}
