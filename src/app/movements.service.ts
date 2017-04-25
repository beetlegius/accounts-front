import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Movement } from './movement';

@Injectable()
export class MovementsService {
  api_url: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  all() {
    return this.http.get(this.api_url + '/movements').map(res => res.json());
  }

  latest() {
    return this.http.get(this.api_url + '/movements/latest').map(res => res.json());
  }

  create(client, attributes) {
    return this.http.post(this.api_url + '/clients/' + client.id + '/movements', { movement: attributes }).map(res => res.json());
  }

  delete(movement) {
    return this.http.delete(this.api_url + '/movements/' + movement.id).map(res => res.json());
  }

}
