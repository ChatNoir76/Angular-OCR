import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit, OnDestroy {

  title = 'Angular Blog Application';

  posts: Post[];
  postSub: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSub = this.postService.blogSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

  addPost() {
    console.log("prochain id du post : " + this.postService.getNextId())
  }

  getLike(id: number){
    this.postService.setLike(id, 1);
  }

  getNoLike(id: number){
    this.postService.setLike(id, -1);
  }

}
