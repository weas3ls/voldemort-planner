import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ToastService } from 'ng-uikit-pro-standard';

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

    constructor(private toastrService: ToastService) { }

    ngOnInit() {
        this.validatingForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            firstName: new FormControl(null, [Validators.required]),
            lastName: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required]),
            confirmPassword: new FormControl(null, [Validators.required])
        });
    }

    get credentials() {
        if (this.password == this.confirmPassword) {
            const credentials = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword
            }
            console.log(credentials);
            return credentials;
        } else {
            const options = { opacity: 1, progressBar: true, timeOut: 3000, closeButton: true };
            this.toastrService.error('Your passwords don\'t match!', 'Hey!', options);
        }
    }
}
