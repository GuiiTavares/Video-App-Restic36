import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { VideoPageComponent } from './components/video-page/video-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'video/:id', component: VideoPageComponent },
    { path: '**', redirectTo: 'welcome' }
];
