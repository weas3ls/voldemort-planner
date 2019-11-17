import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from 'src/app/components/models/User';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    loggedIn: boolean;
    loggedInUser: User;

    constructor(private httpClient: HttpClient) { }

    async register(credentials) {
        const url = 'http://localhost:8080/register';
        const user = await this.httpClient.post(url, credentials).toPromise();
        if (user) {
            this.loggedInUser = {
                id: user['id'],
                firstName: user['firstName'],
                email: user['email'],
                loggedIn: true,
                avatar_url: user['avatar_url']
            };
        }
    }
}
