import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FilterNews, NewsSearchData } from 'src/app/interfaces';
import { NewsApiService } from 'src/app/services';
import { catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { newsSearch, newsSearchFailure, newsSearchSuccess } from 'src/app/store/action';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.scss']
})
export class NewsSearchComponent implements OnInit, AfterViewInit {

  public searchTextHistory: string[] = [];
  public searchResponse: NewsSearchData;
  public searchNewsArray: FilterNews[] = [];
  public isLoading: boolean = false;
  public filteredSearchHistory: string[] = [];
  public searchText: string = '';
  public searchControl: FormControl;
  public isError: boolean = false;
  
  constructor(private newsApiService: NewsApiService, private store: Store) { }

  public ngOnInit(): void {
    this.searchControl = new FormControl('');
  }

  public ngAfterViewInit(): void {
    
    //To refine the search history on the basis of user type keywords
    this.searchControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(700)
    ).subscribe((val) => {
      if(this.searchTextHistory.length){
        this.filteredSearchHistory = this.searchTextHistory.filter((text) => text.toLowerCase().includes(val.toLowerCase()));
      }
    });
  }

  /**
   * Function to search news when the user press enter in the input box
   * @param event 
   */
  public filterNews(event: KeyboardEvent): void{
    if(event.code === 'Enter'){
      const userInput = this.searchControl.value;
      this.filterSearchNews(userInput)
      this.addSearchHistory(userInput);
    }
  }

  /**
   * Function to send the API call to fetch news on the basis of searched news. Also perform UI side effects related to searching
   * @param input 
   */
  public filterSearchNews(input: string): void{
    this.searchControl.setValue('');
    this.isLoading = true;
    this.searchNewsArray = [];
    this.searchText = '';

    this.store.dispatch(newsSearch({keyword: input}));

    this.newsApiService.getFilterNews(input).pipe(
      catchError(err => {
        return throwError(err);
    })).subscribe((res) => {
      this.store.dispatch(newsSearchSuccess());
      this.isError = false;
      this.searchResponse = res['response'];
      this.searchNewsArray = this.searchResponse.docs;
      this.isLoading = false;
      this.searchText = input;
    }, (err: HttpErrorResponse) => {
      this.isError = true;
      this.store.dispatch(newsSearchFailure(err.error));
    });
  }

  /**
   * Function to handle pagination 
   * @param event 
   */
  public handlePageEvent(event): void{
    this.isLoading = true;

    this.newsApiService.getFilterNews(this.searchText, event?.pageIndex).pipe(
      catchError(err => {
        return throwError(err);
    })).subscribe((res) => {
      this.searchResponse = res['response'];
      this.searchNewsArray = this.searchResponse.docs;
      this.isLoading = false;
    }, (err: HttpErrorResponse) => {
      this.isError = true;
      this.store.dispatch(newsSearchFailure(err.error));
    });
  }

  /**
   * Function to maintain the list of last 5 searched words
   * @param text 
   */
  private addSearchHistory(text: string): void{
    const doesExist: boolean = this.searchTextHistory.filter((val) => val.toLowerCase() === text.toLowerCase()).length > 0;
    if(!doesExist){
      if(this.searchTextHistory.length <5){
        this.searchTextHistory.push(text);
      }else{
        this.searchTextHistory.shift();
        this.searchTextHistory.push(text);
      }
    }
    this.filteredSearchHistory = this.searchTextHistory;
  }
}
