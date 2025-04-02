import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { DashboardComponent } from './app/features/dashboard/dashboard.component';
import { LoginComponent } from './app/features/auth/login/login.component';
import { AcquisitionComponent } from './app/features/acquisition/acquisition.component';
import { ProfileAttackComponent } from './app/features/profile-attack/profile-attack.component';
import { UnprofileAttackComponent } from './app/features/unprofile-attack/unprofile-attack.component';
import { ContremeasureComponent } from './app/features/contremeasure/contremeasure.component';
import { CompareComponent } from './app/features/compare/compare.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'acquisition', component: AcquisitionComponent },
            { path: 'profile-attack', component: ProfileAttackComponent },
            { path: 'unprofile-attack', component: UnprofileAttackComponent },
            { path: 'contre-mesure', component: ContremeasureComponent },
            { path: 'compare', component: CompareComponent }

        ]
    },
    
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '/notfound' }

];
