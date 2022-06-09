import { Component, OnInit } from '@angular/core';
import { WorksService } from 'src/app/services/works.service';
import { HttpClient } from '@angular/common/http';
import { Journal } from './journal'; 

@Component({
  selector: 'app-journal-container',
  templateUrl: './journal-container.component.html',
  styleUrls: ['./journal-container.component.scss']
})
export class JournalContainerComponent implements OnInit {
  offset = 1;
  rows = 10000; //max 10K based on crossref github docs https://github.com/CrossRef/rest-api-doc#:~:text=the%20given%20journal-,Parameters,-Parameters%20can%20be
  maxPage = 5;
  itemPerPage = 20;
  noData: boolean = false;
  hasData: boolean = false;
  details: any[] = [];
  final: Journal[] = [];
  journals: any;
  currentPage: number = 1;
  isActiveSearch: boolean = false;
  currQueryStr: string = '';

  constructor(private workService: WorksService, private httpClient: HttpClient) { }

  pageChanged(event: number){
    this.currentPage = event;
    console.log(this.sequence(event), 'sequence');
    if (this.isActiveSearch) {
      this.search(this.sequence(event), this.currQueryStr);
    } else {
      this.fetchData(this.sequence(event));
    }
   }

  ngOnInit() {
    this.fetchData(this.offset);
  }

  public onSearchSubmit(event: string) {
    const queryStr = event.replace(/ /g,"+");

    console.log(queryStr);
    this.search(1, queryStr, true);
  }

  public async fetchData(offset: number){
    this.isActiveSearch = false;
    this.hasData = false;
    this.journals = await this.workService.sendGetRequest(offset);
    this.details = JSON.parse(this.journals).message.items
    this.final = [];
    this.transformData(this.details);
    return this.hasData = true;
  }

  public async search(offset: number, queryStr?: string, isInit?: boolean) {
    this.currentPage = isInit ? 1 : this.currentPage;
    this.isActiveSearch = true;
    this.hasData = false
    this.currQueryStr = queryStr ? queryStr : '';
    this.journals = await this.workService.searchWorks(offset, queryStr);
    this.details = JSON.parse(this.journals).message.items
    this.final = [];
    this.transformData(this.details);
    this.hasData = true;
  }

  private transformData(details: any[]) {
    let works: any[] = details;
    const completed:any[] = [];
    works.map(i => {
      const completeDetails: Journal = {
        title: !i.title || i.title === '' ? 'N/A' : i.title[0],
        author: i.author ? `${i.author[0].given} ${i.author[0].family}` : 'N/A',
        publisher: i.publisher ? i.publisher : 'N/A',
        score: i.score ? i.score : 0,
        DOI: i.DOI ? i.DOI : 'N/A',
        created: i.created ? `${i.created['date-time']}` : 'N/A',
        URL: i.URL ? i.URL : 'N/A',
        type: i.type ? i.type : 'N/A',
        referenceCount: i['references-count'] ? i['references-count'] : 'N/A'
      };
      this.final.push(completeDetails)
    });
  }

  private sequence(i: number) {
    i--;
    const x = (i * 5) + 1;
    return x;
  }

}
