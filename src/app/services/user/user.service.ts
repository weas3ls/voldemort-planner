import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from 'src/app/components/models/User';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    loggedInUser: User;

    private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.loggedInUser);
    public $currentUser: Observable<User> = this.userSubject.asObservable();

    constructor(private httpClient: HttpClient) { }

    public get currentUserValue(): User {
        return this.userSubject.value;
    }

    register(credentials: any) {    
        const url = 'http://localhost:8001/users';
        return this.httpClient.post(url, credentials).pipe(map(user => {
            this.userSubject.next(user);
            return user;
        }));
    }

    login(credentials: { username: string, password: string }) {
        const url = 'http://localhost:8001/auth';
        return this.httpClient.post(url, credentials).pipe(map(user => {
            this.userSubject.next(user);
            return user;
        }));
    }

    logout() {
        this.userSubject.next(null);
    }
}
