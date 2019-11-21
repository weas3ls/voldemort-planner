import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModulesPro, MDBSpinningPreloader, ToastModule } from 'ng-uikit-pro-standard';
import { MdbFileUploadModule } from "mdb-file-upload";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MyEventsComponent } from './components/my-events/my-events.component';
import { FooterComponent } from './components/footer/footer.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { HowToBeADeathEaterComponent } from './components/how-to-be-a-death-eater/how-to-be-a-death-eater.component';
import { FAQComponent } from './components/faq/faq.component';
import { DeathEaterAnthemComponent } from './components/death-eater-anthem/death-eater-anthem.component';
import { ViewEventComponent } from './components/view-event/view-event.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        HeaderComponent,
        LoginComponent,
        MyEventsComponent,
        FooterComponent,
        CreateEventComponent,
        EditEventComponent,
        TermsOfServiceComponent,
        HowToBeADeathEaterComponent,
        FAQComponent,
        DeathEaterAnthemComponent,
        ViewEventComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MDBBootstrapModulesPro.forRoot(),
        ToastModule.forRoot(),
        MdbFileUploadModule,
        BrowserAnimationsModule
    ],
    providers: [
        MDBSpinningPreloader,
    ],
    bootstrap: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        RegisterComponent,
        LoginComponent,
        MyEventsComponent,
        CreateEventComponent,
        EditEventComponent,
        TermsOfServiceComponent,
        HowToBeADeathEaterComponent,
        FAQComponent,
        DeathEaterAnthemComponent,
        ViewEventComponent
    ]
})
export class AppModule { }
