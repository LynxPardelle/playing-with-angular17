import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[exists]',
  standalone: true,
})
export class ItExistsDirective {
  @Input() exists!: boolean;
  @Output('itExists') initEvent: EventEmitter<void> = new EventEmitter();
  constructor() {
    if (!!this.exists) setTimeout(() => this.initEvent.emit(), 10);
  }
}
