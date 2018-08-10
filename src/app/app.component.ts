import { Component, OnInit } from '@angular/core';
import { Subscription, interval, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
dateSub = new Subject<number>();
maDate: number = Date.now();
compteur: Subscription;

ngOnInit()
{
  const counter = interval(1000);
  this.compteur = counter.subscribe(
    (value) => {
      this.maDate = Date.now();
      this.emitMyDate();
    }
  )
}

emitMyDate()
{
  this.dateSub.next(this.maDate);
}
  

}
