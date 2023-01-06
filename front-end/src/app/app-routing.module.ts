import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RedirectComponent } from './redirect/redirect.component';
import { UrlComponent } from './url/url.component';
import { UrlResolver } from './url/url.resolver';

const routes: Routes = [

  {
    path: 'not-found',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
  {
    path: ':slug',
    resolve: { slug: UrlResolver },
    component: RedirectComponent,
  },
  {
    path: '',
    component: UrlComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
