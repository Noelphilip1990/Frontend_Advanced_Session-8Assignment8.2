import { Directive, ElementRef, Input ,HostListener} from '@angular/core';
@Directive({
	selector:'[myHighlight]'
})
export class HighlightDirective
{
	private color: string = 'red';
 constructor(private el:ElementRef)
 {
	 this.el.nativeElement.style.color = this.color;
 }
}
