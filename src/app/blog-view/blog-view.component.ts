import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

  newPost()
  {
    const newPost = {
      title: "un nouveau post",
      content: "ici le contenu",
      loveIts: 20,
      created_at: "17/02/2018"
    }

    this.posts.push(newPost);

  }

}
