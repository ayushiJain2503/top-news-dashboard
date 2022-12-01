import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { NewsDetailsComponent } from './news-details';
import { NewsSearchComponent } from './news-search';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{
        path: 'details/:id',
        component: NewsDetailsComponent
    }]
  },
  {
    path: 'search',
    component: NewsSearchComponent
  },
  {
    path: '**',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopNewsRoutingModule { }
