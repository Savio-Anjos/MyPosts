import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { ListComponent } from 'src/app/components/list/list.component';
import { ListPostsUserComponent } from 'src/app/components/list-posts-user/list-posts-user.component';
import { CreatePostComponent } from 'src/app/components/create-post/create-post.component';
import { UpdatePostComponent } from 'src/app/components/update-post/update-post.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'userPosts', component: ListPostsUserComponent },
  { path: 'createPosts', component: CreatePostComponent },
  { path: 'updatePosts', component: UpdatePostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
