import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root',
})
export class UrlResolver implements Resolve<void> {
  constructor(
    private readonly urlService: UrlService,
    private readonly router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    if (route.params?.['slug']) {
      this.urlService
        .getUrlBySlug(route.params?.['slug'])
        .then((model) => {
          // Redirect to original
          window.location.href = model?.original!;
        })
        .catch(() => {
          this.router.navigateByUrl('/');
        });
    }
    this.router.navigateByUrl('/');
  }
}
