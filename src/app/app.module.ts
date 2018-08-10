import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { Routes, RouterModule } from '@angular/router';

const mesURL: Routes = [
  { path: 'edition', component: EditPostComponent},
  { path: 'blog', component: BlogViewComponent},
  { path: '', component: BlogViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogViewComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(mesURL)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
