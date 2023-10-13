import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HtmlTaskComponent } from './components/html-task/html-task.component';
import { AppRoutingModule } from './components/routing/app-routing-module';
import { HomeComponent } from './components/home/home.component';
import { BreadcrumbComponent } from './components/mdn-page/components/breadcrumb/breadcrumb.component';
import { MdnPageComponent } from './components/mdn-page/mdn-page.component';
import { ContentComponent } from './components/mdn-page/components/content/content.component';
import { FooterComponent } from './components/mdn-page/components/footer/footer.component';
import { FooterInfoComponent } from './components/mdn-page/components/footer-info/footer-info.component';
import { FooterNavComponent } from './components/mdn-page/components/footer-nav/footer-nav.component';
import { HeaderComponent } from './components/mdn-page/components/header/header.component';
import { SectionsComponent } from './components/mdn-page/components/sections/sections.component';
import { SidebarComponent } from './components/mdn-page/components/sidebar/sidebar.component';
import { ControlsComponent } from './components/mdn-page/components/controls/controls.component';
import { SidebarMenuComponent } from './components/mdn-page/components/sidebar-menu/sidebar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlTaskComponent,
    HomeComponent,
    MdnPageComponent,
    BreadcrumbComponent,
    ContentComponent,
    ControlsComponent,
    FooterComponent,
    FooterInfoComponent,
    FooterNavComponent,
    HeaderComponent,
    SectionsComponent,
    SidebarComponent,
    SidebarMenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
