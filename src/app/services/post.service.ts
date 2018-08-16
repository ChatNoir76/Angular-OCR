import { Post } from "../models/post.model";
import { Subject } from "rxjs";

export class PostService {

    private posts: Post[] = [
        new Post(177,'test','titre1','contenu1',1,Date.now())
    ];
    blogSubject = new Subject<Post[]>();

    emitPosts() {
        this.blogSubject.next(this.posts.slice());
    }
    
    addPost(p: Post) {
        this.posts.push(p);
        this.emitPosts();
    }

    private getMaxId() {
        var maxId = -1;
        for(let p of this.posts) {
            if(p.id > maxId)
            {
                maxId = p.id;
            }
          }
          return maxId;
    }

    getNextId() {
        return this.getMaxId() + 1;
    }

    setLike(index: number,addVal: number) {
        for(let p of this.posts) {
            if(p.id == index)
            {
                p.loveIts += addVal;
            }
          }
        this.emitPosts();
    }



}