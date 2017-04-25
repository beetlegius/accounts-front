import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovementsBoxComponent } from './movements-box/movements-box.component';

const appRoutes: Routes = [
  {
    path: 'clients/:id',
    component: MovementsBoxComponent
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
