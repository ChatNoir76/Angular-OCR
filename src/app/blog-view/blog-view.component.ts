import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
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
    this.actualisation();
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

  actualisation() {
    this.postService.getPostFromServer();
    this.postService.emitPosts();
  }

  getLike(id: number){
    this.postService.setLike(id, 1);
  }

  getNoLike(id: number){
    this.postService.setLike(id, -1);
  }

  deletePost(id: number) {
    this.postService.deletePostById(id);
  }

}
