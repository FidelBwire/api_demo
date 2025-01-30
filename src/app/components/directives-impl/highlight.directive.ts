import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2 ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      this.appHighlight
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      'white'
    );
  }

}
