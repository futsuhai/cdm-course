import { Component } from '@angular/core';
import { SidebarLinks } from '../../models/sidebar.links';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    class: 'sidebar'
  }
})
export class SidebarComponent {

  sidebarLinks: SidebarLinks[] = [
    {
      title: 'Tutorials',
      links: [
        'HTML basics',
        'Introduction to HTML',
        'Multimedia and embedding',
        'HTML tables'
      ]
    },
    {
      title: 'References',
      links: [
        'HTML basics',
        'Introduction to HTML',
        'Multimedia and embedding',
        'HTML tables'
      ]
    }
  ]
}
