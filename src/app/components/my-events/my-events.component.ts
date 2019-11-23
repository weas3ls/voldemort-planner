import { UserService } from 'src/app/services/user/user.service';
import { MyEventsService } from './../../services/my-events/my-events.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Event } from '../models/Event';
import { User } from '../models/User';

@Component({
    selector: 'app-my-events',
    templateUrl: './my-events.component.html',
    styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {

    createdEvents: Array<Event>;
    otherEvents: Array<Event>;
    user: User;

    constructor(
        private myEventsService: MyEventsService,
        private userService: UserService
    ) {
        this.userService.$currentUser.subscribe(user => this.user = user);
    }

    async ngOnInit() {
        this.createdEvents = await this.myEventsService.getCreatedEvents();
        this.otherEvents = await this.myEventsService.getOtherEvents();
    }
}
