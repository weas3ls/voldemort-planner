import { Time } from '@angular/common';

export interface Event {
    event_id: number;
    title: string;
    description: string;
    address: string;
    location: string;
    created: Date;
    startTime: Time;
    endTime: Time;
    visibility: number;
    image: File;
    type: number;
}