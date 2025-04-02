import { Component } from '@angular/core';
import { AppTopbar } from '../../layout/component/app.topbar';

@Component({
  selector: 'gaia-dashboard',
  imports: [AppTopbar],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
