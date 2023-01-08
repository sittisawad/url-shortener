import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Toast } from 'bootstrap';
import { UrlModel } from './url.model';
import { UrlService } from './url.service';
import { urlValidator } from './url.validator';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss'],
})
export class UrlComponent implements OnInit {
  public form: FormGroup = new FormGroup(
    {
      url: new FormControl<string>('', [Validators.required, urlValidator()]),
    },
    { updateOn: 'change' }
  );

  public model: UrlModel | null = null;
  public currentUrl = document.URL;

  public get url(): FormControl<string> {
    return this.form.get('url') as FormControl<string>;
  }

  constructor(private urlService: UrlService) {}

  ngOnInit(): void {}

  onShorten() {
    this.urlService
      .createSlugByUrl(this.url.value)
      .then((model) => {
        this.model = model
      })
      .catch((err) => {
        this.model = null;
      });
    //this.form.reset();
  }

  onCopyUrl() {
    navigator.clipboard.writeText(this.currentUrl + this.model?.slug)
    const el = document.getElementById('copyToast');
    const toast = new Toast(el!);
    toast.show();
  }
}
