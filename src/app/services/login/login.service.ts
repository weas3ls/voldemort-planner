import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/components/models/User';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    loggedIn = false;
    loggedInUser: User = null;

    constructor(private httpClient: HttpClient) { }

    async login(credentials: { email: string, password: string }) {
        const url = 'http://localhost:11000/project1/login';
        const user = await this.httpClient.post(url, credentials).toPromise();
        if (user) {
            this.loggedInUser = {
                id: user['id'],
                firstName: user['firstName'],
                email: user['email'],
                loggedIn: true,
                avatar_url: user['avatar_url']
            }
        }
        return this.loggedInUser;
    }

    getUser() {
        return this.loggedInUser;
    }
}
