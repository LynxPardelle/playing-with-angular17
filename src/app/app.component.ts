import {
  Component,
  WritableSignal,
  afterNextRender,
  afterRender,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
/* CDK */
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
/* RxJs */
import { Observable, map, shareReplay } from 'rxjs';
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
/* Material */
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
export interface INavigationLink {
  link?: string;
  name: string;
  queryParams?: {
    [key: string]: string;
  };
  fragment?: string;
  links?: INavigationLink[];
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    /* Components */
    HeaderComponent,
    LoadingComponent,
    ErrorComponent,
    FooterComponent,
    MainComponent,
    /* Material */
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public openSideNav: WritableSignal<boolean> = signal(false);
  public isHandset$: Observable<boolean> = this._breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => {
        this.openSideNav.set(!result.matches);
        return result.matches;
      }) /* ,
      shareReplay() */
    );
  public navigationLinks: INavigationLink[] = [
    {
      link: 'home',
      name: 'Home',
    },
    {
      link: 'list/lists',
      name: 'My Lists',
    },
    {
      link: 'list',
      name: 'First List',
      queryParams: {
        listId: '1',
      },
    },
  ];
  private _befService?: NgxBootstrapExpandedFeaturesService;
  public renders: number = 0;
  public nextRenders: number = 0;
  constructor(private _breakpointObserver: BreakpointObserver) {
    afterRender(() => {
      if (!this._befService) {
        this._befService = new NgxBootstrapExpandedFeaturesService();
      }
      this.renders++;
      console.log('afterRender', this.renders);
      this.cssCreate();
    });
    afterNextRender(() => {
      if (!this._befService) {
        this._befService = new NgxBootstrapExpandedFeaturesService();
        // this._befService?.changeDebugOption();
        // console.log(this._befService.unbefysize('bef-stroke__svg-red'));
        console.log(
          this._befService.unbefysize('bef-w-calcSD100per__MIN__280pxED')
        );
      }
      this.nextRenders++;
      console.log('afterNextRender', this.nextRenders);
      this.cssCreate();
    });
  }
  changeOpenSideNav() {
    console.log('changeOpenSideNav');
    this.openSideNav.set(!this.openSideNav());
    console.log('this.openSideNav', this.openSideNav());
  }
  cssCreate() {
    if (this._befService) {
      this._befService.cssCreate();
    }
  }
}
