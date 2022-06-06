import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTabPage } from './my-tab.page';

const routes: Routes = [
  {
    path: '',
    component: MyTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTabPageRoutingModule {}
