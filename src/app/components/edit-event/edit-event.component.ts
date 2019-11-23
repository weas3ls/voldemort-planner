import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMyOptions, ToastService } from 'ng-uikit-pro-standard';

import { Event } from './../models/Event';
import { User } from '../models/User';
import { EditEventService } from './../../services/edit-event/edit-event.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
    
    event: Event = null;
    event_id: number;
    title: string;
    startDate;
    endDate;
    startTime;
    endTime;
    description: string;
    address: string;
    location: string;
    type: number;
    visibility: number;
    file: File;
    user: User;
    errorOptions = { opacity: 1, progressBar: true, timeOut: 3000, closeButton: true };
    successOptions = { opacity: 1, progressBar: true, timeOut: 3000, closeButton: true, toastClass: 'black' };

    public datePickerOptions: IMyOptions = {
        dateFormat: 'ddd, mmm d, yyyy'
    };

    onFileAdd(file: File) {
        this.file = file;
    }

    onFileRemove() {
        this.file = null;
    }

    constructor(
        private editEventService: EditEventService,
        private userService: UserService,
        private activatedRoute: ActivatedRoute,
        private datePipe: DatePipe,
        private toastService: ToastService,
        private router: Router
    ) {
        this.userService.$currentUser.subscribe(user => this.user = user);
    }

    async ngOnInit() {
        this.event = await this.editEventService.getEvent(Number (this.activatedRoute.snapshot.paramMap.get('id')));
        if (this.event) {
            this.event_id = this.event.event_id;
            this.title = this.event.title;
            this.startTime = this.event.startTime
            this.startDate = new Date(this.startTime);
            this.startTime = new Date(this.startTime).toLocaleTimeString();
            this.endTime = this.event.endTime
            this.endDate = new Date(this.endTime);
            this.endTime = new Date(this.endTime).toLocaleTimeString();
            this.description = this.event.description;
            this.address = this.event.address;
            this.location = this.event.location;
            this.file = this.event.image;
            this.type = this.event.type;
            this.visibility = this.event.visibility;
        }
    }

    get data() {
        const data = {
            userId: this.user.userid,
            clientRequest: {
                event_id: this.event_id,
                title: this.title,
                type: this.type,
                description: this.description,
                location: this.location,
                address: this.address,
                visibility: this.visibility,
                imgAddr: this.file,
                startTime: new Date(this.datePipe.transform(new Date(this.startDate), 'yyyy-MM-dd') + ' ' + this.startTime).toISOString(),
                endTime: new Date(this.datePipe.transform(new Date(this.endDate), 'yyyy-MM-dd') + ' ' + this.endTime).toISOString()
            }
        }
        return data;
    }

    async onSubmit() {
        const result = await this.editEventService.editEvent(this.data);
        if (result) {
            this.toastService.success('Lord Voldemort is pleased', 'Impressive', this.successOptions);
            this.router.navigateByUrl('/my-events');
        } else {
            this.toastService.error('What did you do wrong?', 'No no no!', this.errorOptions);
        }
    }

    async deleteEvent() {
        const result = await this.editEventService.deleteEvent(this.data);
        if (result) {
            this.toastService.error('Lord Voldemort does not tolerate anti-social behavior', 'Beware', this.errorOptions);
            this.router.navigateByUrl('/my-events');
        } else {
            this.toastService.success('Seems like this event was prophesied to move forward', 'Very interesting', this.successOptions);
        }
    }
}