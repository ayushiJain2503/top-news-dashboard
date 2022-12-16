import { News, NewsSearchData } from './news.interface';

export interface HttpResponseNews {
  status: string;
  copyright: string;
  section: string;
  last_updated: string;
  num_results: string;
  results: News[];
}

export interface HttpResponseSearch {
  status: string;
  copyright: string;
  response: NewsSearchData;
}
