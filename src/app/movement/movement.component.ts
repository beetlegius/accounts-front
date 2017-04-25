import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { MovementsService } from '../movements.service';
import { Movement } from '../movement';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss']
})
export class MovementComponent implements OnInit {
  @Input() movement: Movement;
  @Output() onDelete = new EventEmitter<Movement>();

  constructor(private movementsService: MovementsService) { }

  ngOnInit() {
  }

  destroy() {
    this.movementsService.delete(this.movement).subscribe( () => {
      this.onDelete.emit(this.movement);
    });
  }

}
