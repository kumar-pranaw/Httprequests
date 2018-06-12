import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
       return this.http.post('https://udemy-ng-http-46e84.firebaseio.com/data.json', servers, {headers: headers});
    }
    updateServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
       return this.http.put('https://udemy-ng-http-46e84.firebaseio.com/data.json', servers, {headers: headers});
    }
    getServers() {
        return this.http.get('https://udemy-ng-http-46e84.firebaseio.com/data.json')
        .map(
            (response: Response) => {
                const data = response.json();
                for (const server of data) {
                    server.name = 'FETCHED_' + server.name;
                }
                return data;
            }
        );
    }
    getAppName() {
        return this.http.get('https://udemy-ng-http-46e84.firebaseio.com/appName.json')
        .map(
            (response: Response) => {
                return response.json();
            }
        );
    }

}
