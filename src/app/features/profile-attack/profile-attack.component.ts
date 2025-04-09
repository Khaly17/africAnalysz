import { Component } from '@angular/core';
import { AppTopbar } from '../../layout/component/app.topbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gaia-profile-attack',
  imports: [AppTopbar, CommonModule],
  templateUrl: './profile-attack.component.html',
  styleUrl: './profile-attack.component.scss'
})
export class ProfileAttackComponent {
  isTraining = false;
  trainingFinished = false;

  fullResults = [
    { byte: 0, top1: '0x3F', top2: '0x4A', top3: '0x12' },
    { byte: 1, top1: '0xA2', top2: '0xB3', top3: '0x59' },
    { byte: 2, top1: '0x8E', top2: '0x9A', top3: '0x1C' },
    { byte: 3, top1: '0xE3', top2: '0xD4', top3: '0x22' }
  ];

  topResults: {
    byte: number;
    top1: string;
    top2: string;
    top3: string;
  }[] = [];

  startTraining() {
    this.isTraining = true;
    this.trainingFinished = false;
    this.topResults = [];

    // Simule le temps d’entraînement (affiche le graphique)
    setTimeout(() => {
      this.trainingFinished = true;
      this.isTraining = false;

      let i = 0;
      const interval = setInterval(() => {
        if (i < this.fullResults.length) {
          this.topResults.push(this.fullResults[i]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 500); // chaque ligne apparaît toutes les 500ms
    }, 3000); // simulation d'entraînement de 3 secondes
  }
}

