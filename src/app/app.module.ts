import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientsBoxComponent } from './clients-box/clients-box.component';
import { ClientComponent } from './client/client.component';
import { LastMovementsComponent } from './last-movements/last-movements.component';
import { MovementsBoxComponent } from './movements-box/movements-box.component';
import { MovementComponent } from './movement/movement.component';
import { MovementFormComponent } from './movement-form/movement-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsBoxComponent,
    ClientComponent,
    LastMovementsComponent,
    MovementsBoxComponent,
    MovementComponent,
    MovementFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
