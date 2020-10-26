import { Directive, HostListener, OnChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCheckLength]'
})
export class CheckLengthDirective implements OnChanges {

  constructor(private el: ElementRef) {

  }
  @HostListener('keyup') ngOnChanges() {

    let count = this.el.nativeElement.value.length;
    if (count < 30)
      this.el.nativeElement.style.backgroundColor = "#ff9999";
    else if (count >= 30 && count < 50)
      this.el.nativeElement.style.backgroundColor = "#ff9900";
    else if(count>=50)
      this.el.nativeElement.style.backgroundColor = "#1aff66";
  }
}
