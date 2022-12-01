import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { News } from 'src/app/interfaces';
import { NewsApiService } from 'src/app/services';
import { newsLoad, newsLoadFailure, newsLoadSuccess } from 'src/app/store/action';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnChanges {

  @Input() private category: string = 'home';
  public isLoading: boolean = true;
  public isError: boolean = false;
  public newsData: News[] = [];

  constructor(private newsService: NewsApiService, private store: Store) { }

  public ngOnInit(): void {
    this.getNewsList();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    //Getting updated news list on the basis of selected category
    if(changes['category']){
      this.isLoading = true;
      this.newsData = [];
      this.getNewsList();
    }
  }

  /**
   * Function to get the news list on the basis of selected category
   */
  private getNewsList(): void{
    this.store.dispatch(newsLoad({category: this.category}));
    this.newsService.getLatestTopNews(this.category === 'All' ? 'home' : this.category).pipe(
      catchError(err => {
        return throwError(err);
    })).subscribe((res) => {
        this.store.dispatch(newsLoadSuccess());
        this.isLoading = false;
        this.isError = false
        this.newsData = res['results'];
    },(err) => {
        this.isError = true;
        this.store.dispatch(newsLoadFailure({message: err}));
    });
  }
}
