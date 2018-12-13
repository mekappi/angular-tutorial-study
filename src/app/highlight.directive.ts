import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// HTMLの属性と間違えないようにappのようなディレクティブ用のプレフィックスをつけたほうがよい
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  protected highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
