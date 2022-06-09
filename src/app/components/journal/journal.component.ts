import { Component, OnInit, Input } from '@angular/core';
import { Journal } from '../journal-container/journal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  @Input() works: Journal[] = [];
  currentRate = 8;

  constructor(private router: Router) { }

  ngOnInit(): void {

    console.log(this.works, ' from works component')
  }

  viewDetails(data: Journal ) {
    console.log(data, ' data from journal');
    this.router.navigateByUrl('/full-view', { state: data });
    return true;
  }

}
