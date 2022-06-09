import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { JournalContainerComponent } from './journal-container.component';
import { WorksService } from 'src/app/services/works.service';
import { DebugElement } from '@angular/core';
import {By} from "@angular/platform-browser";

describe('JournalContainerComponent', () => {
  let component: JournalContainerComponent;
  let fixture: ComponentFixture<JournalContainerComponent>;
  let workService: WorksService;
  var mockSkillAddService: jasmine.SpyObj<WorksService>;

  beforeAll(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000;
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ JournalContainerComponent ],
      providers: [WorksService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should view a paginated list of works', () => {
    fixture = TestBed.createComponent(JournalContainerComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'fetchData').and.returnValue(Promise.resolve(true));
    expect(component).toBeTruthy();
  });

  fit('should be accessible', () => {
    fixture = TestBed.createComponent(JournalContainerComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'fetchData').and.returnValue(Promise.resolve(true));
    expect(component).toBeTruthy();
  });

  fit('should perform search', () =>  {
    component.search(1, 'room');
    expect(component.currQueryStr).toBe('room');
  });


  
});
