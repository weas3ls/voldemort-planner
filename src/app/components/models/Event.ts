import { Time } from '@angular/common';

export interface Event {
    id: number;
    title: string;
    description: string;
    address: string;
    location: string;
    dateCreated: Date;
    startDate: Date;
    endDate: Date;
    startTime: Time;
    endTime: Time;
    visibility: number;
    image: File;
}