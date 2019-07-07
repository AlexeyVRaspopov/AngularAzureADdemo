import { Component } from '@angular/core';
      
@Component({
    selector: 'purchase-app',
    template: `
    <div>
                    <nav>
                        <a routerLink="">Главная </a>
                        <a routerLink="/about">О сайте</a>
                    </nav>
                    <router-outlet></router-outlet>
               </div>
    `
})
export class AppComponent {
    title = 'app';
 }