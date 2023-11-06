import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormatNumberCard]'
})
export class FormatNumberCardDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let formattedValue = input.value.replace(/\s/g, '');

    if (formattedValue.length > 0) {
      
      const match = formattedValue.match(new RegExp('.{1,4}', 'g'));

      if (match) {
        formattedValue = match.join(' ');
      }

    }
    
    input.value = formattedValue;
  }

}
