import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-post',
    loadChildren: () => import('./pages/add-post/add-post.module').then( m => m.AddPostPageModule)
  },
  {
    path: 'edit-post',
    loadChildren: () => import('./pages/edit-post/edit-post.module').then( m => m.EditPostPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'user-posts',
    loadChildren: () => import('./pages/user-posts/user-posts.module').then( m => m.UserPostsPageModule)
  },
  {
    path: 'ingredient-list',
    loadChildren: () => import('./pages/ingredient-list/ingredient-list.module').then( m => m.IngredientListPageModule)
  },
  {
    path: 'view-other-profile',
    loadChildren: () => import('./pages/view-other-profile/view-other-profile.module').then( m => m.ViewOtherProfilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
