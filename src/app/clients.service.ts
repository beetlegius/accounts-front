import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientsService {
  api_url: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  all() {
    return this.http.get(this.api_url + '/clients').map(res => res.json());
  }

  find(id) {
    return this.http.get(this.api_url + '/clients/' + id).map(res => res.json());
  }

}
