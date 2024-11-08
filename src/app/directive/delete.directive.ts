import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, Renderer2 } from "@angular/core";
import { HttpClientService } from "../services/http-client.service";

declare var $: any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  @Input() id: string;
  @Input() controller: string;
  @Input() action:string;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private httpClientService: HttpClientService
  ) {
    
  }

  @HostListener("click")
  async onclick() {
    debugger
    this.httpClientService.delete({
      controller: this.controller,
      action:this.action
    }, this.id).subscribe(() => {
      
      $(this.element.nativeElement).animate({
        opacity: 0,
        left: "+=50",
        height: "toggle"
      }, 700, () => {
      
        this.callback.emit();
      });
    }, error => {
      console.error("Delete element don't problem:", error);
    });
  }
}
