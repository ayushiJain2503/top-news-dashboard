import { NgModule } from '@angular/core';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsSearchComponent } from './news-search/news-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopNewsRoutingModule } from './top-news-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NewsListComponent,
    NewsDetailsComponent,
    NewsSearchComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TopNewsRoutingModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatCommonModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatListModule,
    MatPaginatorModule,
    MatIconModule
  ],
  providers: []
})
export class TopNewsModule {}
