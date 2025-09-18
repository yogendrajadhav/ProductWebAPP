import { Injectable } from '@angular/core';
import configurl from '../../../public/assets/config/config.json';//import configurl from '../assets/config/config.json';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
providedIn: 'root'
})
export class DemoService {
config = {ApiUrl: configurl.apiServer.url};
constructor(private http: HttpClient) {
this.getJSON().subscribe((data) => {
this.config.ApiUrl = data.apiServer.url;
});
}
public getJSON(): Observable<any> {
return this.http.get('../../../public/assets/config/config.json');
}
getData(): Observable<any> {
return this.http.get(this.config.ApiUrl + '/api/product/list');
}
}