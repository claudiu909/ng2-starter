import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent { }