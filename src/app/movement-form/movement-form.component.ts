import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { MovementsService } from '../movements.service';
import { Movement } from '../movement';
import { Client } from '../client';

@Component({
  selector: 'app-movement-form',
  templateUrl: './movement-form.component.html',
  styleUrls: ['./movement-form.component.scss']
})
export class MovementFormComponent implements OnInit {
  @Input() client: Client;
  @Output() onCreate = new EventEmitter<Movement>()
  newMovement: Object = {};

  constructor(private movementsService: MovementsService) { }

  ngOnInit() {
  }

  add(event: Event){
    this.movementsService.create(this.client, this.newMovement).subscribe( (movement: Movement) =>
      this.onCreate.emit(movement)
    );
    this.newMovement = { client_id: this.client.id };
  }

}
