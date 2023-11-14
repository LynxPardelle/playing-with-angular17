import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  @Input() public title?: string;
  @Input() public titleClasses: string = 'text-center';
  @Input() public message?: string;
  @Input() public messageClasses: string = 'text-center';
  @Input() public spinnerColor: 'primary' | 'warn' | 'accent' = 'primary';
  @Input() public customSpinnerColor?: string;
  @Input() public spinnerMode: 'determinate' | 'indeterminate' =
    'indeterminate';
  @Input() public spinnerValue: number = 0;
  @Input() public spinnerDiameter: number = 100;
  @Input() public spinnerStrokeWidth: number = 10;
  @Input() public spinnerClasses: string = 'd-block mx-auto ';
}
