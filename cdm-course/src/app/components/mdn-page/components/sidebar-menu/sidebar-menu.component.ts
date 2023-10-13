import { Component, Input } from '@angular/core';
import { SidebarLinks } from '../../models/sidebar.links';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent {

  @Input()
  sidebarLink!: SidebarLinks;
}
