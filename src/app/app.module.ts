import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { Routes, RouterModule } from '@angular/router';
import {PostService} from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { FofComponent } from './fof/fof.component';

const mesURL: Routes = [
  { path: 'edition', component: EditPostComponent},
  { path: 'blog', component: BlogViewComponent},
  { path: '', component: BlogViewComponent},
  { path: 'not-found', component: FofComponent },
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  declarations: [
    AppComponent,
    BlogViewComponent,
    EditPostComponent,
    FofComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(mesURL)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
