import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlTaskComponent } from '../html-task/html-task.component';
import { HomeComponent } from '../home/home.component';
import { MdnPageComponent } from '../mdn-page/mdn-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'html', component: HtmlTaskComponent },
  { path: 'mdn', component: MdnPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }