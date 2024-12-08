import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { injectSpeedInsights } from '@vercel/speed-insights';


if (environment.production) {
  enableProdMode();
  
}
bootstrapApplication(AppComponent, appConfig).then(()=>{
  injectSpeedInsights();
})
  .catch((err) => console.error(err));
