import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HtmlTaskComponent } from './components/html-task/html-task.component';
import { CssFirstTaskComponent } from './components/css-first-task/css-first-task.component';
import { AppRoutingModule } from './components/routing/app-routing-module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlTaskComponent,
    CssFirstTaskComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
