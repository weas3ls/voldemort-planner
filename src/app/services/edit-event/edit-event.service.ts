import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Event } from 'src/app/components/models/Event';

@Injectable({
    providedIn: 'root'
})
export class EditEventService {
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

    async editEvent(formData) {
        const url = 'http://localhost:8001/events/2';
        const res = await this.httpClient.post(url, formData).toPromise();
        if (res == 1) {
            return true;
        }
        return false;
    }

    async deleteEvent(formData) {
        const url = 'http://localhost:8001/events/3';
        const res = await this.httpClient.post(url, formData).toPromise();
        if (res == 1) {
            return true;
        }
        return false;
    }
}
