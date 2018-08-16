import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      titre: ['',Validators.required],
      nom: ['',Validators.required],
      contenu: ['',Validators.required]
    });
  }

  onSubmitForm(){
    const fV = this.postForm.value;
    const newPost = new Post(
      this.postService.getNextId(),
      fV['nom'],
      fV['titre'],
      fV['contenu'],
      0,
      Date.now()
    );

    this.postService.addPost(newPost);
    this.router.navigate(['/blog']);
  }

}
