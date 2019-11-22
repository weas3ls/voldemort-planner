import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CreateEventService {

    constructor(private httpClient: HttpClient) { }

    createEvent(formData) {
        const url = 'http://localhost:8001/events/1';
        return this.httpClient.post<HttpResponse<Object>>(url, formData).pipe(tap(data => {
            return data;
        }));
    }
}
