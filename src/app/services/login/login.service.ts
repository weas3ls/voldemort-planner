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

    async login(credentials: { username: string, password: string }) {
        const url = 'http://localhost:8001/auth';
        const user = await this.httpClient.post(url, credentials).toPromise();
        console.log(user);
        if (user) {
            this.loggedInUser = {
                id: user['userid'],
                firstName: user['firstname'],
                email: user['email'],
                avatar_url: user['avatar'],
                loggedIn: true
            }
        }
        console.log(this.loggedInUser);
        return this.loggedInUser;
    }

    getUser() {
        return this.loggedInUser;
    }
}
