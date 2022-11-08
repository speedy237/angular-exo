import { Directive,ElementRef , HostListener  } from '@angular/core';

@Directive({
  selector: '[appCouleurs]'
})
export class CouleursDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  private couleurs(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.couleurs('yellow');
  }
  
@HostListener('mouseleave') onMouseLeave() {
  this.couleurs('');
}

}
