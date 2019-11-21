import { Component, OnInit } from '@angular/core';

import { IMyOptions } from 'ng-uikit-pro-standard';
import { Time } from '@angular/common';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

    title: string;
    startDate: Date;
    endDate: Date;
    startTime: Time;
    endTime: Time;
    description: string;
    address: string;
    location: string;
    file: File;

    public datePickerOptions: IMyOptions = {
        dateFormat: 'ddd, mmm d, yyyy'
    };

    onFileAdd(file: File) {
        this.file = file;
    }

    onFileRemove() {
        this.file = null;
    }

    constructor() { }

    ngOnInit() {
    }
}
