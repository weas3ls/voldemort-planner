import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from 'src/app/components/models/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    public $currentUser: Observable<User> = this.userSubject.asObservable();

    constructor(private httpClient: HttpClient) { }

    public get currentUserValue(): User {
        return this.userSubject.value;
    }

    register(credentials: any) {    
        const url = 'http://localhost:8001/users/1';
        credentials['avatar_url'] = 'https://middle.pngfans.com/20190711/p/harry-potter-dark-mark-png-harry-potter-death-eate-476e858b044d85b8.jpg';
        return this.httpClient.post(url, credentials).pipe(map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
    }

    login(credentials: { username: string, password: string }) {
        const url = 'http://localhost:8001/auth';
        return this.httpClient.post(url, credentials).pipe(map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.userSubject.next(null);
    }
}
