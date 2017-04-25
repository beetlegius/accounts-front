import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ClientsService } from '../clients.service';

import { Client } from '../client';
import { Movement } from '../movement';

@Component({
  selector: 'app-movements-box',
  templateUrl: './movements-box.component.html',
  styleUrls: ['./movements-box.component.scss'],
  providers: [ClientsService]
})
export class MovementsBoxComponent implements OnInit {
  client: Client;

  constructor(private clientsService: ClientsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.switchMap((params: Params) =>
      this.clientsService.find(+params['id'])
    ).subscribe((client: Client) => {
      this.client = client;
    });
  }

  onCreate(movement: Movement) {
    this.client.movements.push(movement);
    this.client.movements_count++;
  }

  onDelete(movement: Movement) {
    this.client.movements.splice(this.client.movements.indexOf(movement), 1);
    this.client.movements_count--;
  }

}
