import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/components/models/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    loggedIn: boolean;
    loggedInUser: User;

    constructor(private httpClient: HttpClient) { }

    async register(credentials: { firstName: string; lastName: string; email: string; password: string; confirmPassword: string; }) {
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
}
