import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
            label: 'Home',
            items: [
                { label: 'Tableau de bord', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                { label: 'Banc de test', icon: 'pi pi-fw pi-cog', routerLink: ['/config-test'] },
                { label: 'Acquisition', icon: 'pi pi-fw pi-chart-line', routerLink: ['/acquisition'] },
                { label: 'Analyse', icon: 'pi pi-fw pi-chart-line', routerLink: ['/analyse'] },
                { label: 'Contre-mesures', icon: 'pi pi-fw pi-shield', routerLink: ['/countermeasures'] },
                { label: 'Administrateur', icon: 'pi pi-fw pi-user', routerLink: ['/users'] },
            ]
            }
        ];
    }
}
