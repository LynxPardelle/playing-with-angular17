import { Component, afterNextRender, afterRender } from '@angular/core';

/* Modules */
import { CommonModule } from '@angular/common';
/* Components */
import { HeaderComponent } from './core/components/header/header.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MainComponent } from './core/components/main/main.component';
/* Services */
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    LoadingComponent,
    ErrorComponent,
    FooterComponent,
    MainComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private _befService?: NgxBootstrapExpandedFeaturesService;
  public renders: number = 0;
  public nextRenders: number = 0;
  constructor() {
    afterRender(() => {
      if (!this._befService) {
        this._befService = new NgxBootstrapExpandedFeaturesService();
        // this._befService?.changeDebugOption();
        console.log(this._befService?.unbefysize('bef-stroke__svg-red'));
      }
      this.renders++;
      console.log('afterRender', this.renders);
      this.cssCreate();
    });
    afterNextRender(() => {
      if (!this._befService) {
        this._befService = new NgxBootstrapExpandedFeaturesService();
      }
      this.nextRenders++;
      console.log('afterNextRender', this.nextRenders);
      this.cssCreate();
    });
  }
  cssCreate() {
    this._befService?.cssCreate();
  }
}
