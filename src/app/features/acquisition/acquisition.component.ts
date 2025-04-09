import { Component } from '@angular/core';
import { AppTopbar } from '../../layout/component/app.topbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gaia-acquisition',
  imports: [AppTopbar, CommonModule],
  templateUrl: './acquisition.component.html',
  styleUrl: './acquisition.component.scss'
})
export class AcquisitionComponent {
  isCapturing = false;
  showWaveform = false;
  logs: string[] = [];

  startCapture() {
    this.isCapturing = true;
    this.showWaveform = false;
    this.logs = [];

    let step = 0;
    const messages = [
      '> System initialized...',
      '> Waiting for trigger...',
      '> Trigger detected at t = 0.21s',
      '> Trace acquisition started...',
      '> Trace captured successfully...',
      '> Processing trace data...',
      '> Trace ready for analysis.'
    ];

    const interval = setInterval(() => {
      if (step < messages.length) {
        this.logs.push(messages[step]);
        step++;
      } else {
        clearInterval(interval);
        this.isCapturing = false;
        this.showWaveform = true;
      }
    }, 2000);
  }

  stopCapture() {
    this.logs.push('> Acquisition stopped by user.');
    this.isCapturing = false;
  }

  saveCapture() {
    this.logs.push('> Trace saved as trace_01.bin');
  }
}

