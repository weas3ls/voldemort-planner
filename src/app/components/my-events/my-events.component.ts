import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Event } from '../models/Event';

@Component({
    selector: 'app-my-events',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './my-events.component.html',
    styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {

    createdEvents: Array<Event>;
    otherEvents: Array<Event>;

    constructor() { }

    ngOnInit() {
    }
}
