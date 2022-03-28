import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private dropBtn: ElementRef) {}

  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) onclick(event: Event) {
    this.isOpen = this.dropBtn.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
