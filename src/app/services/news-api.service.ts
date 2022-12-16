import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News, NewsSearchData } from '../interfaces';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  constructor(private http: HttpService) {}

  /**
   * Function to get latest news on the basis of selected category
   * @param category
   * @returns
   */
  public getLatestTopNews(category?: string): Observable<News[]> {
    return this.http.getTopNews(category);
  }

  /**
   * Function to get searched filter news on the basis of searched text and the page number. Default page is 0
   * @param filterText
   * @param page
   * @returns
   */
  public getFilterNews(
    filterText: string,
    page?: number
  ): Observable<NewsSearchData> {
    return this.http.getSearchNews(filterText, page);
  }
}
