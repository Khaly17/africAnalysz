import { Component } from '@angular/core';
import { AppTopbar } from '../../layout/component/app.topbar';
import { RecentExperimentsComponent } from '../recent-experiments/recent-experiments.component';

@Component({
  selector: 'gaia-dashboard',
  imports: [AppTopbar, RecentExperimentsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
