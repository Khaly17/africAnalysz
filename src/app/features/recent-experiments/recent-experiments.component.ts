// recent-experiments.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-experiments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full px-4">
      <h3 class="text-white text-lg font-bold pb-2 pt-4">Recent Experiments</h3>
      <div class="grid grid-cols-[40px_1fr] gap-x-2">
        <ng-container *ngFor="let exp of experiments; let last = last">
          <div class="flex flex-col items-center gap-1" [class.pb-3]="last">
            <div *ngIf="!first(exp)" class="w-[1.5px] bg-[#3c4753] h-4"></div>
            <div class="size-2 rounded-full bg-white"></div>
            <div *ngIf="!last" class="w-[1.5px] bg-[#3c4753] h-4 grow"></div>
          </div>
          <div class="flex flex-col py-3">
            <p class="text-white text-base font-medium leading-normal">{{ exp.name }}</p>
            <p class="text-[#9dabb8] text-base font-normal leading-normal">{{ exp.date }}</p>
          </div>
        </ng-container>
      </div>
    </div>
  `
})
export class RecentExperimentsComponent {
  experiments = [
    { name: 'Experiment 1', date: 'Sep 12, 2023' },
    { name: 'Experiment 2', date: 'Aug 25, 2023' },
    { name: 'Experiment 3', date: 'Aug 15, 2023' },
    { name: 'Experiment 4', date: 'Jul 29, 2023' },
    { name: 'Experiment 5', date: 'Jul 12, 2023' }
  ];

  first(exp: any) {
    return this.experiments.indexOf(exp) === 0;
  }
}
