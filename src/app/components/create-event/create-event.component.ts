import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { IMyOptions, ToastService } from 'ng-uikit-pro-standard';
import { first } from 'rxjs/operators';

import { CreateEventService } from './../../services/create-event/create-event.service';
import { User } from '../models/User';
import { UserService } from 'src/app/services/user/user.service';

@Component({
    selector: 'app-create-event',
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

    startTime: string;
    endTime: string;
    title: any;
    startDate: string | number | Date;
    endDate: string | number | Date;
    description: any;
    location: any;
    address: any;
    visibility: any;
    type: any;
    options = { opacity: 1, progressBar: true, timeOut: 3000, closeButton: true, toastClass: 'black' };
    user: User;
    visibilitySelect: Array<any>;
    typeSelect: Array<any>;

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
        this.visibilitySelect = [
            { value: '1', label: 'Private (Just for you)' },
            { value: '2', label: 'Closed (Only people you choose)' },
            { value: '3', label: 'Open (For the world to see)' },
        ];
        this.typeSelect = [
            { value: '1', label: 'Social' },
            { value: '2', label: 'Business' },
            { value: '3', label: 'Other' },
        ];
    }

    onSubmit() {
        this.startTime = new Date(this.datePipe.transform(new Date(this.startDate), 'yyyy-MM-dd') + ' ' + this.startTime).toISOString();
        this.endTime = new Date(this.datePipe.transform(new Date(this.endDate), 'yyyy-MM-dd') + ' ' + this.endTime).toISOString();
        const data = {
            userId: this.user.userid,
            clientRequest: {
                title: this.title,
                type: this.type,
                description: this.description,
                location: this.location,
                address: this.address,
                visibility: this.visibility,
                startTime: this.startTime,
                endTime: this.endTime
            }
        }
        this.createEventService.createEvent(data).pipe(first()).subscribe(data => {
            this.toastService.success('Lord Voldemort is pleased', 'Event created!', this.options);
            this.router.navigate(['/my-events']);
        });
    }
}