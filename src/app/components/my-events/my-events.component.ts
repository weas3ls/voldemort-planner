import { Component, OnInit } from '@angular/core';

import { startOfDay, endOfDay } from 'date-fns';

import { CalendarEvent } from 'mdb-calendar';

@Component({
    selector: 'app-my-events',
    templateUrl: './my-events.component.html',
    styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {

    events: CalendarEvent[] = [
        {
            id: 'mdb-calendar-event-1',
            startDate: new Date(startOfDay(new Date())),
            endDate: new Date(endOfDay(new Date(2019, 2, 9))),
            name: 'Conference',
            color: 'info',
        },
        {
            id: 'mdb-calendar-event-2',
            startDate: new Date(startOfDay(new Date())),
            endDate: new Date(endOfDay(new Date())),
            name: 'Meeting',
            color: 'success'
        },
    ];

    constructor() { }

    generateUid() {
        const uid = Math.random().toString(36).substr(2, 9);
        return `mdb-calendar-event-${uid}`;
    }

    ngOnInit() {
    }

    onEventEdit(event: CalendarEvent) {
        const oldEvent = this.events.findIndex(test => test.id === event.id);
        this.events[oldEvent] = event;
        this.events = [...this.events];
    }

    onEventAdd(event: CalendarEvent) {
        event.id = this.generateUid();
        this.events = [...this.events, event];
    }

    onEventDelete(deletedEvent: CalendarEvent) {
        const eventIndex = this.events.findIndex(event => event.id === deletedEvent.id);
        this.events.splice(eventIndex, 1);
        this.events = [...this.events];
    }

}
