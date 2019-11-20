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
        const url = 'http://localhost:8001/users';
        const user = await this.httpClient.post(url, credentials).toPromise();
        console.log(user);
        if (user) {
            this.loggedInUser = {
                id: user['userid'],
                firstName: user['firstname'],
                email: user['email'],
                avatar_url: user['avatar'],
                loggedIn: true
            };
        }
        return this.loggedInUser;
    }
}
