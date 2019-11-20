import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from './../../services/login/login.service';
import { User } from './../models/User';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loggedIn: boolean = false;
    validatingForm: FormGroup;
    user: User;
    returnUrl: string = '/';
    email: any;
    password: any;

    constructor(
        private loginService: LoginService,
        private router: Router,
        private route: ActivatedRoute,
        private toastrService: ToastService
    ) { }

    ngOnInit() {
        this.validatingForm = new FormGroup({
            email: new FormControl('', Validators.email),
            password: new FormControl('', Validators.required)
        });
    }

    async submit() {
        console.log(this.email);
        const credentials = {
            username: this.email,
            password: this.password
        };
        console.log(credentials);
        this.user = await this.loginService.login(credentials);
        if (this.user) {
            this.loggedIn = this.user.loggedIn;
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/profile';
        } else {
            const options = { opacity: 1, progressBar: true, timeOut: 3000, closeButton: true, toastClass: 'pink' };
            this.toastrService.error('Login Failed!', 'Sorry!', options);
        }
        this.router.navigateByUrl(this.returnUrl);
    }

    logout() {
        this.user = null;
        this.router.navigateByUrl(this.returnUrl);
    }
}
