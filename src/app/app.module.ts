import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { Routes, RouterModule } from '@angular/router';
import {PostService} from './services/post.service';

const mesURL: Routes = [
  { path: 'edition', component: EditPostComponent},
  { path: 'blog', component: BlogViewComponent},
  { path: '', component: BlogViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BlogViewComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(mesURL)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
