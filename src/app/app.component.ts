import { Component } from '@angular/core';
import { ClientsService } from './clients.service'
import { MovementsService } from './movements.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ClientsService,
    MovementsService
  ]
})
export class AppComponent {
}
