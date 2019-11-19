import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModulesPro, MDBSpinningPreloader, ToastModule } from 'ng-uikit-pro-standard';
import { MdbCalendarModule } from 'mdb-calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MyEventsComponent } from './components/my-events/my-events.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        HeaderComponent,
        LoginComponent,
        MyEventsComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MDBBootstrapModulesPro.forRoot(),
        ToastModule.forRoot(),
        MdbCalendarModule
        // AgmCoreModule.forRoot({ apiKey: 'Your_api_key' })
    ],
    providers: [
        MDBSpinningPreloader,
    ],
    bootstrap: [AppComponent, HeaderComponent, FooterComponent, RegisterComponent, LoginComponent]
})
export class AppModule { }
