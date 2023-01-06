import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UrlModel } from './url.model';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private baseUrl: string = environment.backendUrl;

  constructor(private readonly http: HttpClient) {}

  async getUrlBySlug(slug: string): Promise<UrlModel | null> {
    return await firstValueFrom(this.http.get<UrlModel>(this.baseUrl + slug));
  }

  async createSlugByUrl(url: string): Promise<UrlModel | null> {
    return await firstValueFrom(
      this.http.post<UrlModel>(this.baseUrl, { url })
    );
  }
}
