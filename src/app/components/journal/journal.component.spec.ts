import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JournalComponent } from './journal.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('JournalComponent', () => {
  let component: JournalComponent;
  let fixture: ComponentFixture<JournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ JournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should click item and view more details', () => {
    fixture = TestBed.createComponent(JournalComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'viewDetails').and.returnValue(true);
  });
});
