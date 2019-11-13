import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModulesPro.forRoot(),
        // AgmCoreModule.forRoot({ apiKey: 'Your_api_key' })
    ],
    providers: [
        MDBSpinningPreloader,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
