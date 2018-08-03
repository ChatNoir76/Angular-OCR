import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Angular Blog Application';

  posts = [
    {
      title: "avis scrat",
      content: "que pensez vous de ce très chère scrat ?",
      loveIts: 1,
      created_at: "01/02/2018"
    },
    {
      title: "pffff",
      content: "il est tranquil, il n'a même pas besoin de se prendre la tête avec angular !!!!",
      loveIts: 15,
      created_at: "04/02/2018"
    },
    {
      title: "non mais allo quoi !!!!",
      content: "ouvrir un blog pour dire des conneries sérieux.... !!!!!!",
      loveIts: -2,
      created_at: "05/02/2018"
    }
  ]
}
