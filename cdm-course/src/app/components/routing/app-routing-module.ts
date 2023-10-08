import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlTaskComponent } from '../html-task/html-task.component';
import { CssFirstTaskComponent } from '../css-first-task/css-first-task.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'html', component: HtmlTaskComponent },
  { path: 'first-css', component: CssFirstTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }