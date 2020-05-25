import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() {

      this.countThree()
      .then( msg => console.log("Promise Finished: ", msg) )
      .catch( error => console.log("Error in promise: ", error) );

   }

  ngOnInit(): void {
  }

  countThree(): Promise<boolean>{
    return new Promise((resolve, reject)  => {
      let counter = 0;
      let interval = setInterval( () => {
        counter += 1;
        console.log(counter);
        if(counter === 3){
          resolve(true);
          //reject('Error');
          clearInterval(interval);
        }
      }, 1000)
    });
  }
}
