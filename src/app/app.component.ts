import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('intro') intro: ElementRef | any;
  @ViewChild('intro2') intro2: ElementRef | any;
  @ViewChild('intro3') intro3: ElementRef | any;
  @ViewChild('intro4') intro4: ElementRef | any;
  @ViewChild('intro5') intro5: ElementRef | any;

  title = 'proyecto_x';


  ngOnInit(): void {

  }

  Instagram(){
    window.open('https://www.instagram.com/niicogalvez/');
  }
  Github(){
    window.open('https://github.com/');
  }
  Linkedin(){
    window.open('https://www.linkedin.com/in/nicolas-galvez-458115226/');
  }
  Twitter(){
    window.open('https://twitter.com/niicogalvez');
  }
}

