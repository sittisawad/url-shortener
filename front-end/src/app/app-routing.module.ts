import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UrlComponent } from './url/url.component';
import { UrlResolver } from './url/url.resolver';

const routes: Routes = [
  {
    path: '',
    component: UrlComponent,
    pathMatch: 'full',
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
  {
    path: ':slug',
    resolve: { slug: UrlResolver },
    component: NotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
