import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [
        RouterModule, 
        CommonModule, 

    ],
    template: ` 
         <header class="flex items-center justify-between border-b border-[#293038] px-4 sm:px-10 py-3 flex-wrap">
  <!-- Logo + Title -->
  <div class="flex items-center gap-4 text-white">
    <div class="w-12 h-12 cursor-pointer">
      <img src="assets/images/africa-logo.png" alt="AfricAnalysz Logo" class="w-full h-full object-contain" />
    </div>
    <h2 class="text-white text-lg font-bold cursor-pointer">AfricAnalysz</h2>
  </div>

  <!-- Burger Button for mobile -->
  <button class="sm:hidden text-white ml-auto" (click)="toggleMenu()">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>

  <!-- Navigation + Profile + Buttons -->
  <div
    [ngClass]="{'flex': menuOpen, 'hidden': !menuOpen}"
    class="w-full sm:w-auto sm:flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-white mt-4 sm:mt-0">
    
    <!-- Nav Links -->
    <div class="flex flex-col sm:flex-row gap-4 sm:gap-9">
      <a class="text-sm font-medium cursor-pointer" (click)="navigateToDashboard()">Dashboard</a>
      <a class="text-sm font-medium cursor-pointer" (click)="navigateToAcquisition()">Acquisition</a>
      <a class="text-sm font-medium cursor-pointer" (click)="navigateToProfile()">Profile</a>
      <a class="text-sm font-medium cursor-pointer" (click)="navigateToUnProfile()">Non Profile</a>
      <a class="text-sm font-medium cursor-pointer" (click)="navigateToContreMeasure()">Contre mesure</a>
    </div>

    <!-- Right Buttons -->
    <div class="flex items-center gap-2 mt-2 sm:mt-0">
      <button class="bg-[#293038] text-white rounded-full px-4 py-2 text-sm font-medium cursor-pointer" (click)="navigateToSettings()">Settings</button>

      <button
        class="flex items-center justify-center h-10 bg-[#293038] text-white rounded-full px-2.5 gap-2 text-sm font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
          <path
            d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z">
          </path>
        </svg>
      </button>

      <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer"
        style='background-image: url("https://cdn.usegalileo.ai/sdxl10/57c23a9d-9ca0-4a8e-a3d6-008a6b6f68f2.png");'>
      </div>
    </div>
  </div>
</header>

    `
})
export class AppTopbar {
    
  menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
      this.menuOpen = !this.menuOpen;
  }

  navigateToAcquisition() {
      this.router.navigate(['/acquisition']);
  }

  navigateToDashboard() {
      this.router.navigate(['/']);
  }

  navigateToProfile() {
      this.router.navigate(['/profile-attack']);
  }

  navigateToUnProfile() {
      this.router.navigate(['/unprofile-attack']);
  }

  navigateToContreMeasure() {
      this.router.navigate(['/contre-mesure']);
  }

  navigateToSettings() {
      this.router.navigate(['/settings']);
  }
}