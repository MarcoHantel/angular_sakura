import { Component } from '@angular/core';
import { landingPageComponent } from './landingPage/landingPage.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { FindUsComponent } from './find-us/find-us.component';
import { ImprintComponent } from './../imprint/imprint.component';


@Component({
  selector: 'app-main-content',
  imports: [
    landingPageComponent,
    OurMenuComponent,
    HowToOrderComponent,
    FindUsComponent,
    ImprintComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
