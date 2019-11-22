import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user/user.service';
import { User } from './../models/User';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    user: User;

    constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.userService.$currentUser.subscribe(user => this.user = user);
    }
    
    ngOnInit() {
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['/login']);
    }

}
