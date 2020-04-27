import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit {

  @ViewChild('txtPercent') txtPercent: ElementRef;

  @Input('customeName') legend:string = "legend";
  @Input() percent:number = 50;

  @Output() changePercentValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(value: number){
    if( (this.percent <= 0 && value < 0) || (this.percent >= 100 && value > 0))
      return;

    this.percent += value;

    this.changePercentValue.emit(this.percent);

    this.txtPercent.nativeElement.focus();
  }

  inputValueChange( newValue: number){

    if(newValue >= 100)
      this.percent = 100;
    else if(newValue <= 0)
      this.percent = 0;
    else
      this.percent = newValue;

    this.txtPercent.nativeElement.value = this.percent;

    this.changePercentValue.emit(this.percent)
  }

}
