import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalContainerComponent } from './components/journal-container/journal-container.component';
import { FullViewComponent } from './components/full-view/full-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'works', pathMatch: 'full' },
  { path: 'works', component: JournalContainerComponent },
  { path: 'full-view', component: FullViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
