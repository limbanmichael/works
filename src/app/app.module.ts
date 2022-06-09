import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournalContainerComponent } from './components/journal-container/journal-container.component';
import { JournalComponent } from './components/journal/journal.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardLoadingComponent } from './components/card-loading/card-loading.component';
import { FullViewComponent } from './components/full-view/full-view.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    JournalContainerComponent,
    JournalComponent,
    CardLoadingComponent,
    FullViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
