import { Component, OnInit, ViewChild, AfterViewInit, ViewContainerRef, TemplateRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-quienes-component',
  templateUrl: './quienes.component.html',
  styleUrls: ['./quienes.component.css']
})
export class QuienesComponent implements OnInit, AfterViewInit {

  @ViewChild(TemplateRef, { static: true }) template: TemplateRef<any>
  @ViewChild(TemplateRef, { static: true, read: ViewContainerRef }) container: ViewContainerRef
  @ViewChild("miDiv", { static: true, read: ElementRef }) div: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const viewRef = this.container.createEmbeddedView(this.template);
    this.container.createEmbeddedView(this.template);
    const element = this.div.nativeElement;
    element.appendChild(viewRef.rootNodes[0]);
  }

}
