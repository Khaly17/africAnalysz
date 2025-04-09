import { Component } from '@angular/core';
import { AppTopbar } from '../../layout/component/app.topbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gaia-unprofile-attack',
  standalone:true,
  imports: [AppTopbar, CommonModule],
  templateUrl: './unprofile-attack.component.html',
  styleUrl: './unprofile-attack.component.scss'
})
export class UnprofileAttackComponent {
  isLoading = false;
  displayGraph = false;
  displayTable = false;
  attackFinished = false;


  fullResults = [
    { byte: 0, guess: '0x3F', confidence: '97%' },
    { byte: 1, guess: '0xA2', confidence: '89%' },
    { byte: 2, guess: '0x7C', confidence: '84%' },
    { byte: 3, guess: '0x55', confidence: '91%' },
    { byte: 4, guess: '0x6E', confidence: '88%' },
    { byte: 5, guess: '0x1D', confidence: '92%' },
    { byte: 6, guess: '0xB4', confidence: '85%' },
    { byte: 7, guess: '0x9F', confidence: '90%' },
    { byte: 8, guess: '0xE3', confidence: '87%' },
    { byte: 9, guess: '0x4A', confidence: '93%' },
  ];

  recoveredKeys: { byte: number; guess: string; confidence: string }[] = [];

  runAttack() {
    this.isLoading = true;
    this.displayGraph = false;
    this.displayTable = false;
    this.recoveredKeys = [];

    setTimeout(() => {
      this.displayGraph = true;
    }, 2000);

    setTimeout(() => {
      this.displayTable = true;
      this.isLoading = false;

      // Ajout progressif des lignes
      let i = 0;
      const interval = setInterval(() => {
        if (i < this.fullResults.length) {
          this.recoveredKeys.push(this.fullResults[i]);
          i++;
        } else {
          clearInterval(interval);
          this.attackFinished = true;
        }
      }, 500); 
    }, 3000);
  }
}
