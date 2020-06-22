import { Directive, Input, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUser]'
})
export class UserDirective implements AfterViewInit{
@Input() user;
constructor(private el: ElementRef) {
 }

 ngAfterViewInit() {
     this.el.nativeElement.innerHTML = ` ${this.el.nativeElement.innerHTML} - ${this.user} `
     
 }


}