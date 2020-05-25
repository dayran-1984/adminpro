import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  subscription: Subscription;

  constructor() {
    this.subscription = this.giveMeObservable()
    //.pipe(retry(2))
    .subscribe(
        num => console.log('Subscriber', num),
        error => console.error('Error in the observable', error),
        () => console.log('The observable finished !!!')
      );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    console.log("The page will be close.");
    this.subscription.unsubscribe();
  }

  giveMeObservable() : Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let counter = 0;
      let interval = setInterval( () => {

        counter += 1;

        let exit = {
          value: counter
        };

        observer.next( exit );

        // if (counter === 3) {
        //   clearInterval(interval);
        //   observer.complete()
        // }

        // if(counter === 2){
        //   clearInterval(interval);
        //   observer.error('Error HELP !!!');
        // }
      }, 1000);
    }).pipe(
              map( resp => resp.value),
              filter( (value, index) => {
                  if (value % 2 === 1) {
                    return true
                  } else {
                    return false
                  }
              } )
          );
  }

}
