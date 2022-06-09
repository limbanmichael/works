import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  private api = "https://api.crossref.org/works?rows=5&offset=";
  private totalApiResult = "https://api.crossref.org/works";
  private search = "https://api.crossref.org/works?query.bibliographic=room+at+the+bottom&rows=5&offset=";
  public search2 = "https://api.crossref.org/works?rows=5&offset=";
  public forTesting: boolean = true;

  constructor(private httpClient: HttpClient) { }

  async sendGetRequest(offset: number){
    const data = await this.httpClient.get(`${this.api}${offset}`).toPromise();
    localStorage.setItem('latestCall', `${this.api}${offset}`);
    return JSON.stringify(data);
  }

 async getResult(fullUrl: string) {
   const data = await this.httpClient.get(fullUrl).toPromise();
   return JSON.stringify(data);
 }

 async searchWorks(offset: number, queryStr?: string) {
   const apiSearch = `${this.search2}${offset}&query.bibliographic=${queryStr}`;
   const data = await this.httpClient.get(apiSearch).toPromise();
   localStorage.setItem('latestCall', apiSearch);
   return JSON.stringify(data);
 }


}
