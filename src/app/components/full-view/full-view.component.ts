import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-full-view',
  templateUrl: './full-view.component.html',
  styleUrls: ['./full-view.component.scss']
})
export class FullViewComponent implements OnInit {
  works: any;
  sample = 'sample test';

  constructor(
    private workService: WorksService,
    private activatedroute:ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    console.log(history.state, ' history')
    this.works = history.state;
    console.log(this.works, ' works');
  }

  back() {
    this.router.navigateByUrl('/works');
  }

}
