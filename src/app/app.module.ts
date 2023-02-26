import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { NavbarComponent } from './main-component/navbar/navbar.component';
import { BannerComponent } from './main-component/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardCarousalComponent } from './main-component/card-carousal/card-carousal.component';
import { MarketResearchComponent } from './main-component/market-research/market-research.component';
import { IndustryAnalystComponent } from './main-component/industry-analyst/industry-analyst.component';
import { PublishedReportsComponent } from './main-component/published-reports/published-reports.component';
import { FormsModule } from '@angular/forms';
import { NguCarouselModule } from '@ngu/carousel';
import { FooterComponent } from './main-component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    NavbarComponent,
    BannerComponent,
    CardCarousalComponent,
    MarketResearchComponent,
    IndustryAnalystComponent,
    PublishedReportsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NguCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
