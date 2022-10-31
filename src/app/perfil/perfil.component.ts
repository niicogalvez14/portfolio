import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Instagram(){
    window.open('https://www.instagram.com/niicogalvez/');
  }
  Github(){
    window.open('https://github.com/niicogalvez14');
  }
  Linkedin(){
    window.open('https://www.linkedin.com/in/nicolas-galvez-458115226/');
  }
  Twitter(){
    window.open('https://twitter.com/niicogalvez');
  }

}
