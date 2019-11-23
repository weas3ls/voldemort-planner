import { ActivatedRoute, Router } from '@angular/router';
import { ViewEventService } from './../../services/view-event/view-event.service';
import { Component, OnInit } from '@angular/core';

import { ToastService } from 'ng-uikit-pro-standard';

import { User } from '../models/User';
import { Event } from './../models/Event';
import { UserService } from 'src/app/services/user/user.service';

@Component({
    selector: 'app-view-event',
    templateUrl: './view-event.component.html',
    styleUrls: ['./view-event.component.scss']
})
export class ViewEventComponent implements OnInit {

    event: Event = null;
    event_id: number;
    event_attendants;
    num_attendants: number;
    user_attending: boolean = false;
    title: string;
    startDate;
    endDate;
    startTime;
    endTime;
    description: string;
    address: string;
    location: string;
    email: string;
    user: User;
    errorOptions = { opacity: 1, progressBar: true, timeOut: 3000, closeButton: true };
    successOptions = { opacity: 1, progressBar: true, timeOut: 3000, closeButton: true, toastClass: 'black' };

    constructor(
        private userService: UserService,
        private viewEventService: ViewEventService,
        private activatedRoute: ActivatedRoute,
        private toastService: ToastService,
        private router: Router
    ) {
        this.userService.$currentUser.subscribe(user => this.user = user);
    }

    async ngOnInit() {
        this.event = await this.viewEventService.getEvent(Number(this.activatedRoute.snapshot.paramMap.get('id')));
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
        }
        this.event_attendants = await this.viewEventService.getNumberOfAttendants(this.event_id);
        this.event_attendants.forEach(attendant => {
            if (this.user.userid == attendant.user_id) {
                this.user_attending = true;
            }
        });
        this.num_attendants = this.event_attendants.length;
    }

    async attend(eventID: number) {
        const attendData = {
            user_id: this.user.userid,
            event_id: this.event_id,
            user_role_id: 2
        }
        const result = await this.viewEventService.attendEvent(attendData);
        if (result['attendant_id']) {
            this.toastService.success('Lord Voldemort is pleased', 'Welcome to the event', this.successOptions);
            this.router.navigateByUrl('/my-events');
        }
    }

    async unAttend(eventID: number) {
        const attendData = {
            user_id: this.user.userid,
            event_id: this.event_id,
            user_role_id: 2
        }
        console.log(attendData);
        const result = await this.viewEventService.unAttendEvent(attendData);
        if (result == 1) {
            this.toastService.success('You will be... missed (see FAQ #1)', 'Hmmm', this.errorOptions);
            this.router.navigateByUrl('/my-events');
        }
    }
}
