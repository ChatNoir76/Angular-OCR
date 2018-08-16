import { Post } from "../models/post.model";
import { Subject, empty } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

    constructor(private httpClient: HttpClient){}

    private posts: Post[] = [];
    blogSubject = new Subject<Post[]>();

    emitPosts() {
        this.blogSubject.next(this.posts.slice());
    }
    
    addPost(p: Post) {
        this.posts.push(p);
        this.savePostToServer();
        this.emitPosts();
    }

    deletePostById(id: number)
    {
        if (this.posts)
        {
        var counter = -1;
        for(let p of this.posts) {
            counter++;
            if(p.id == id)
            {
                console.log("suppression du post id=" + id + " en position :" + counter);
                this.posts.splice(counter,1);
            }
          }
        }
        this.emitPosts();
        this.savePostToServer();
    }

    private getMaxId() {
        var maxId = -1;
        if (this.posts)
        {
        for(let p of this.posts) {
            if(p.id > maxId)
            {
                maxId = p.id;
            }
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
        this.savePostToServer();
    }

    private savePostToServer() {
        this.httpClient
        .put('https://activite-angular-ocr.firebaseio.com/posts.json', this.posts)
        .subscribe(
            () => {
                console.log('enregistrement terminé !');
            },
            (error) => {
                console.log('Erreur d\'enregistrement de la base !' + error);
            }
        );
    }

    getPostFromServer() {
        this.httpClient
        .get<any[]>('https://activite-angular-ocr.firebaseio.com/posts.json')
        .subscribe(
            (response) => {
                this.posts = response;
                this.emitPosts();
            },
            (error) => {
                console.log('Erreur de chargement de la base !' + error);
            }
        );
    }

}