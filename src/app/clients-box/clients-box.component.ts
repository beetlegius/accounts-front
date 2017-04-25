import { Component, OnInit } from '@angular/core';

import { Client } from '../client';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients-box',
  templateUrl: './clients-box.component.html',
  styleUrls: ['./clients-box.component.scss']
})
export class ClientsBoxComponent implements OnInit {
  clients: Client[];

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.clientsService.all().subscribe((clients: Client[]) => {
      this.clients = clients;
    });
  }

}
