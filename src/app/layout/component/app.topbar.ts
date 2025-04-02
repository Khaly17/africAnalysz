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
         <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#293038] px-10 py-3">
        <div class="flex items-center gap-4 text-white">
        <div class="w-12 h-12 cursor-pointer">
          <img src="assets/images/africa-logo.png" alt="AfricAnalysz Logo" class="w-full h-full object-contain" />
        </div>

          <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] cursor-pointer">AfricAnalysz</h2>
        </div>
        <div class="flex flex-1 justify-end gap-8">
          <div class="flex items-center gap-9">
          <a class="text-white text-sm font-medium leading-normal cursor-pointer" (click)="navigateToDashboard()">Dashboard</a>
          <a class="text-white text-sm font-medium leading-normal cursor-pointer" (click)="navigateToAcquisition()">Acquisition</a>
            <a class="text-white text-sm font-medium leading-normal cursor-pointer" (click)="navigateToProfile()">Profile</a>
            <a class="text-white text-sm font-medium leading-normal cursor-pointer" (click)="navigateToUnProfile()">Non Profile</a>
            <a class="text-white text-sm font-medium leading-normal cursor-pointer" (click)="navigateToContreMeasure()">Contre mesure</a>
          </div>
          
          <div class="flex gap-2">
            <button class="bg-[#293038] text-white rounded-full px-4 py-2 text-sm font-medium cursor-pointer" (click)="navigateToSettings()">Settings</button>

            <button
              class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#293038] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <div class="text-white" data-icon="Bell" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          <div
            class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer"
            style='background-image: url("https://cdn.usegalileo.ai/sdxl10/57c23a9d-9ca0-4a8e-a3d6-008a6b6f68f2.png");'
          ></div>
        </div>
      </header>
    `
})
export class AppTopbar {
    
    constructor(private router: Router){}

    navigateToAcquisition(){
        this.router.navigate(["/acquisition"])
    }
    navigateToDashboard(){
        this.router.navigate(["/"])
    }
    navigateToProfile(){
        this.router.navigate(["/profile-attack"])
        
    }
    navigateToUnProfile(){
        this.router.navigate(["/unprofile-attack"])
        
    }
    navigateToContreMeasure(){
        this.router.navigate(["/contre-mesure"])
        
    }
    navigateToSettings(){
        this.router.navigate(["/settings"])
        
    }
}