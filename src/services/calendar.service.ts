import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { ICalendar } from '../interfaces/ICalendar';

import 'rxjs/add/operator/map';

@Injectable()
export class CalendarService{
    
    constructor(private http: Http){ }

    private _url : string = "https://private-ed4e1-testapi2336.apiary-mock.com";

    getCalendar() : Observable<ICalendar[]> {
        return this.http.get(this._url + '/calendar')
            .map((res: Response) => <ICalendar[]>res.json())
            .catch((error: any) => Observable.throw(error || 'Server error' ));
    }
}