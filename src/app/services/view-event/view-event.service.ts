import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Event } from 'src/app/components/models/Event';

@Injectable({
    providedIn: 'root'
})
export class ViewEventService {

    event: Event;

    constructor( private httpClient: HttpClient ) { }

    async getEvent(eventId: number) {
        const url = `http://localhost:8001/events/6/${eventId}`;
        const data = await this.httpClient.get(url).toPromise();
        if (data) {
            this.event = {
                event_id: data['event_id'],
                title: data['title'],
                created: data['created'],
                startTime: data['startTime'],
                endTime: data['endTime'],
                description: data['description'],
                location: data['location'],
                address: data['address'],
                image: data['imgAddr'],
                visibility: data['visibility'],
                type: data['type']
            }
        }
        return this.event;
    }

    async getNumberOfAttendants(eventId: number) {
        const url = 'http://localhost:8001/users/2';
        const data = await this.httpClient.post(url, eventId).toPromise();
        return data;
    }

    async attendEvent(data) {
        const url = 'http://localhost:8001/attend/1';
        const res = await this.httpClient.post(url, data).toPromise();
        return res;
    }
    
    async unAttendEvent(data) {
        const url = 'http://localhost:8001/attend/3';
        const res = await this.httpClient.post(url, data).toPromise();
        console.log(res);
        return res;
    }
}
