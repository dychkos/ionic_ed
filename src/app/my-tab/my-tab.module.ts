import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTabPageRoutingModule } from './my-tab-routing.module';

import { MyTabPage } from './my-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTabPageRoutingModule
  ],
  declarations: [MyTabPage]
})
export class MyTabPageModule {}
