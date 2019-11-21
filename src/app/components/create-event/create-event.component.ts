import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { IMyOptions } from 'ng-uikit-pro-standard';

@Component({
    selector: 'app-create-event',
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

    title: string;
    startDate: Date;
    endDate: Date;
    startTime: Time;
    endTime: Time;
    description: string;
    address: string;
    location: string;
    file: File;

    onFileAdd(file: File) {
        this.file = file;
    }

    onFileRemove() {
        this.file = null;
    }

    public datePickerOptions: IMyOptions = {
        dateFormat: 'ddd, mmm d, yyyy'
    };

    constructor() { }

    ngOnInit() {
    }
}