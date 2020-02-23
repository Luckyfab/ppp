import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild("toolbar") toolbar: MatToolbar;
  @ViewChild("main") main: ElementRef;
  @ViewChild("footer") footer: ElementRef;
  name = 'Angular 5';

  constructor(){

  }

  ngOnInit(){
  }

  ngAfterViewInit(){

    //this.main.height = 100 - (this.toolbar.height + this.footer.height)
    console.log( "toolbar" );
    console.log( this.footer.nativeElement.offsetHeight );
    console.log( "footer" );
    console.log( this.footer.nativeElement );
  }
}
