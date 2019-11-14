import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        HeaderComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MDBBootstrapModulesPro.forRoot(),
        // AgmCoreModule.forRoot({ apiKey: 'Your_api_key' })
    ],
    providers: [
        MDBSpinningPreloader,
    ],
    bootstrap: [AppComponent, HeaderComponent, RegisterComponent, LoginComponent]
})
export class AppModule { }
