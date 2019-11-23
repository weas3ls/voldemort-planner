import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastService } from 'ng-uikit-pro-standard';

import { first } from 'rxjs/operators';

import { UserService } from 'src/app/services/user/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    loggedIn: boolean;
    validatingForm: FormGroup;
    firstName: any;
    lastName: any;
    email: any;
    password: any;
    confirmPassword: any;
    avatar: string = 'https://middle.pngfans.com/20190711/p/harry-potter-dark-mark-png-harry-potter-death-eate-476e858b044d85b8.jpg';
    options = { opacity: 1, progressBar: true, timeOut: 3000, closeButton: true };

    constructor(
        private toastService: ToastService,
        private userService: UserService,
        private router: Router,
    ) {
        // redirect to home if already logged in
        if (this.userService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.validatingForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            firstName: new FormControl(null, [Validators.required]),
            lastName: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required]),
            confirmPassword: new FormControl(null, [Validators.required]),
        });
    }

    onSubmit() {
        if (this.validatingForm.invalid) {
            return;
        }
        this.userService.register(this.validatingForm.value).pipe(first()).subscribe(data => {
            this.toastService.success('Registration successful', 'Welcome!', this.options);
            this.router.navigate(['/my-events']);
        },
        error => {
            this.toastService.error('Registration failed!', 'Very interesting', this.options);
        });
    }
}
