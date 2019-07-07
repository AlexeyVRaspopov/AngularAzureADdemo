import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import {Routes, RouterModule} from '@angular/router';

import { MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import {ADALConfig} from '../environments/environment' 

import { AppComponent }   from './app.component';
import { AboutComponent }   from './about.component';
import { HomeComponent }   from './home.component';
import { NotFoundComponent }   from './not-found.component';

const appRoutes: Routes =[
    { path: '', component: HomeComponent , canActivate: [AuthenticationGuard]},
    { path: 'about', component: AboutComponent, canActivate: [AuthenticationGuard]},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), MsAdalAngular6Module.forRoot(ADALConfig)],
    declarations: [ AppComponent, HomeComponent, AboutComponent, NotFoundComponent],
    bootstrap:    [ AppComponent ],
    providers: [AuthenticationGuard]
})

export class AppModule {}