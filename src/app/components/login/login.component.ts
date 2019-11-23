import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastService } from 'ng-uikit-pro-standard';

import { first } from 'rxjs/operators';

import { User } from './../models/User';
import { UserService } from 'src/app/services/user/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loggedIn: boolean = false;
    validatingForm: FormGroup;
    loggedInUser: User;
    returnUrl: string = '/';
    username: any;
    password: any;

    constructor(
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute,
        private toastrService: ToastService
    ) { }

    ngOnInit() {
        this.validatingForm = new FormGroup({
            username: new FormControl('', Validators.email),
            password: new FormControl('', Validators.required)
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/my-events';
    }

    onSubmit() {
        this.userService.login(this.validatingForm.value).pipe(first()).subscribe(user=> {
            this.router.navigate([this.returnUrl]);
        },
        error => {
            const options = { opacity: 1, progressBar: true, timeOut: 3000, closeButton: true };
            this.toastrService.error('A true death eater would remember their password...', 'Wrong Credentials!', options);
        });
    }

    logout() {
        this.loggedInUser = null;
        this.router.navigateByUrl(this.returnUrl);
    }
}
