import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from './../shared/shared.module';  
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [BannerComponent, HomeComponent],
  imports: [HomeRoutingModule, CommonModule, SharedModule, SwiperModule],
})
export class HomeModule { }
