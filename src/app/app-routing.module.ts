import { EditEventComponent } from './components/edit-event/edit-event.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { DeathEaterAnthemComponent } from './components/death-eater-anthem/death-eater-anthem.component';
import { FAQComponent } from './components/faq/faq.component';
import { HowToBeADeathEaterComponent } from './components/how-to-be-a-death-eater/how-to-be-a-death-eater.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { MyEventsComponent } from './components/my-events/my-events.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
}, {
    path: 'login',
    component: LoginComponent
}, {
    path: 'register',
    component: RegisterComponent
}, {
    path: 'my-events',
    component: MyEventsComponent
}, {
    path: 'create-event',
    component: CreateEventComponent
}, {
    path: 'edit-event/:id',
    component: EditEventComponent
}, {
    path: 'terms-of-service',
    component: TermsOfServiceComponent
}, {
    path: 'how-to-be-a-death-eater',
    component: HowToBeADeathEaterComponent
}, {
    path: 'faq',
    component: FAQComponent
}, {
    path: 'death-eater-anthem',
    component: DeathEaterAnthemComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
