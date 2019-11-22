import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { IMyOptions, ToastService } from 'ng-uikit-pro-standard';
import { first } from 'rxjs/operators';

import { CreateEventService } from './../../services/create-event/create-event.service';

@Component({
    selector: 'app-create-event',
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

    startTime;
    endTime;
    file: File;
    validatingForm: FormGroup;
    options = { opacity: 1, progressBar: true, timeOut: 3000, closeButton: true, toastClass: 'black' };

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
        private datePipe: DatePipe,
        private router: Router
    ) { }

    ngOnInit() {
        this.validatingForm = new FormGroup({
            title: new FormControl(null, [Validators.required]),
            startDate: new FormControl(null, [Validators.required]),
            endDate: new FormControl(null, [Validators.required]),
            startTime: new FormControl(null, [Validators.required]),
            endTime: new FormControl(null, [Validators.required]),
            description: new FormControl(null, [Validators.required]),
            address: new FormControl(null, [Validators.required]),
            location: new FormControl(null, [Validators.required])
        });
    }

    onSubmit() {
        if (this.validatingForm.invalid) {
            this.toastService.error('Which field did you miss?', 'Bad Request', this.options);
            return;
        }
        this.startTime = new Date(this.datePipe.transform(new Date(this.validatingForm.get('startDate').value), 'yyyy-MM-dd') + ' ' + this.validatingForm.get('startTime').value).toUTCString();
        this.endTime = new Date(this.datePipe.transform(new Date(this.validatingForm.get('endDate').value), 'yyyy-MM-dd') + ' ' + this.validatingForm.get('endTime').value).toUTCString();
        this.validatingForm.patchValue({startTime: this.startTime});
        this.validatingForm.patchValue({endTime: this.endTime});
        this.validatingForm.removeControl('startDate');
        this.validatingForm.removeControl('endDate');
        this.createEventService.createEvent(this.validatingForm.value).pipe(first()).subscribe(data => {
            this.toastService.success('Lord Voldemort is pleased', 'Event created!', this.options);
            this.router.navigate(['/my-events']);
        });
    }
}