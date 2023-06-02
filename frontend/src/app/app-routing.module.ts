import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PageError404Component } from './main/page-error404/page-error404.component';
import { AccountActionsComponent } from './account-actions/account-actions.component';

// create routes for the components
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'AccountActions', component: AccountActionsComponent },
  { path: '**', component: PageError404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
