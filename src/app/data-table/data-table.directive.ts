import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[dataTableHighlight]'
})

export class DataTableHighlightDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseover') onHover() {
        this.renderer.addClass(this.el.nativeElement, 'highlight');
    }

    @HostListener('mouseleave') onMouseOut() {
        this.renderer.removeClass(this.el.nativeElement, 'highlight');
    }

    @HostListener('click') onClick() {
        this.el.nativeElement.classList.contains('selected') ?
            this.renderer.removeClass(this.el.nativeElement, 'selected') :
            this.renderer.addClass(this.el.nativeElement, 'selected');
    }

}
