import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserService } from 'src/app/services/user/user.service';
import { Event } from '../../components/models/Event';

@Injectable({
    providedIn: 'root'
})
export class MyEventsService {
    
    createdEvents: Array<Event>;
    otherEvents: Array<Event>;

    constructor(
        private httpClient: HttpClient,
        private userService: UserService
    ) { }

    async getCreatedEvents() {
        const url = `http://localhost:8001/events/5/${this.userService.currentUserValue.userid}`;
        const data = await this.httpClient.get(url).toPromise();
        if (data) {
            this.createdEvents = JSON.parse(JSON.stringify(data));
        }
        return this.createdEvents;
    }

    async getOtherEvents () {
        const url = `http://localhost:8001/events/4/${this.userService.currentUserValue.userid}`;
        const data = await this.httpClient.get(url).toPromise();
        if (data) {
            this.otherEvents = JSON.parse(JSON.stringify(data));
        }
        return this.otherEvents;
    }
}
