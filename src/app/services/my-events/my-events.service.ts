import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Event } from '../../components/models/Event';

@Injectable({
    providedIn: 'root'
})
export class MyEventsService {
    
    createdEvents: Array<Event>;
    otherEvents: Array<Event>;

    constructor(
        private httpClient: HttpClient
    ) {

    }

    async getCreatedEvents(userId: number) {
        const url = `http://localhost:8001/events/5/${userId}`;
        const data = await this.httpClient.get(url).toPromise();
        if (data) {
            this.createdEvents = JSON.parse(JSON.stringify(data));
        }
        return this.createdEvents;
    }

    async getOtherEvents (userId: number) {
        const url = `http://localhost:8001/events/4/${userId}`;
        const data = await this.httpClient.get(url).toPromise();
        if (data) {
            this.otherEvents = JSON.parse(JSON.stringify(data));
        }
        return this.otherEvents;
    }
}
