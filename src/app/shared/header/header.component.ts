import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor( public _Service: InfoPaginaService ) { }

  ngOnInit() {
  }

}
