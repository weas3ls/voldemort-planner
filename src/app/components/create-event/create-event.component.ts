import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { IMyOptions, ToastService } from 'ng-uikit-pro-standard';
import { first } from 'rxjs/operators';

import { CreateEventService } from './../../services/create-event/create-event.service';
import { User } from '../models/User';

@Component({
    selector: 'app-create-event',
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

    startTime;
    endTime;
    title;
    startDate;
    endDate;
    description;
    location;
    address;
    file: File;
    options = { opacity: 1, progressBar: true, timeOut: 3000, closeButton: true, toastClass: 'black' };
    user: User;

    onFileAdd(file: File) {
        this.file = file;
    }

    onFileRemove() {
        this.file = null;
    }

    public datePickerOptions: IMyOptions = {
        dateFormat: 'ddd, mmm d, yyyy'
    };

    constructor(
        private toastService: ToastService,
        private createEventService: CreateEventService,
        private userService: UserService,
        private datePipe: DatePipe,
        private router: Router
    ) {
        this.userService.$currentUser.subscribe(user => this.user = user);
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.endDate);
        console.log(this.endTime);
        this.startTime = new Date(this.datePipe.transform(new Date(this.startDate), 'yyyy-MM-dd') + ' ' + this.startTime).toISOString();
        this.endTime = new Date(this.datePipe.transform(new Date(this.endDate), 'yyyy-MM-dd') + ' ' + this.endTime).toISOString();
        const data = {
            userId: this.user.userid,
            clientRequest: {
                title: this.title,
                type: 1,
                description: this.description,
                location: this.location,
                address: this.address,
                visibility: 1,
                imgAddr: '',
                startTime: this.startTime,
                endTime: this.endTime
            }
        }
        console.log(data);
        this.createEventService.createEvent(data).pipe(first()).subscribe(data => {
            this.toastService.success('Lord Voldemort is pleased', 'Event created!', this.options);
            this.router.navigate(['/my-events']);
        });
    }
}