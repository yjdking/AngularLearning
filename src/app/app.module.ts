import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { Observable, BehaviorSubject } from 'rxjs';
// import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

// 引入@angular/material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatPaginatorIntl} from '@angular/material';
import {MatPaginatorIntlCro } from './heroes/moke-heroes';

@NgModule({
  declarations: [
    // MatPaginator,
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    MatPaginatorModule,
    MatListModule,

    // BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,

    // HTTP 请求
    /*HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/

  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
