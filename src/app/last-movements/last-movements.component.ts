import { Component, OnInit } from '@angular/core';
import { MovementsService } from '../movements.service';
import { Movement } from '../movement';

import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-last-movements',
  templateUrl: './last-movements.component.html',
  styleUrls: ['./last-movements.component.scss'],
  providers: [
    {
      provide: CarouselConfig,
      useValue: {
        interval: 3500,
        noPause: true
      }
    }
  ]
})
export class LastMovementsComponent implements OnInit {
  movements: Movement[];

  constructor(private movementsService: MovementsService) { }

  ngOnInit() {
    this.movementsService.latest().subscribe((movements: Movement[]) => {
      this.movements = movements;
    });
  }

}
