import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News, NewsSearchData, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly apiKey = 'GuyV6MoDm1YbKl2qD6KuyzndrAdhW0om';

  constructor(private http: HttpClient) { }

  /**
   * API call to login user in the app
   * @param user 
   * @returns 
   */
  public loginUser(user: User): Observable<Object> {
    return this.http.post('http://localhost:8000/auth/login', { "email": user.username,  "password": user.password});
  }

  /**
   * API call to register user in the DB
   * @param user 
   * @returns 
   */
  public registerUser(user: User): Observable<Object>{
    return this.http.post('http://localhost:8000/auth/register', { "email": user.username,  "password": user.password})
  }

  /**
   * get latest top news on the basis of selected category
   * @param category 
   * @returns 
   */
  public getTopNews(category: string): Observable<News[]> {
    return this.http.get<News[]>(`/svc/topstories/v2/${category}.json?api-key=` + this.apiKey);
  }

  /**
   * get latest news on the basis of searched text
   * @param filterText 
   * @param page 
   * @returns 
   */
  public getSearchNews(filterText: string, page:number = 0): Observable<NewsSearchData> {
    return this.http.get<NewsSearchData>(`/svc/search/v2/articlesearch.json?q=${filterText}&page=${page}&api-key=` + this.apiKey);
  }
}
