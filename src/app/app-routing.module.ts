import { MyEventsComponent } from './components/my-events/my-events.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
    path: 'login',
    component: LoginComponent
}, {
    path: 'register',
    component: RegisterComponent
}, {
    path: 'my-events',
    component: MyEventsComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
