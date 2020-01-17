import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  tituloPagina='';
  subtituloPagina='';

  subtitulo1='';
  subtitulo2='';
  subtitulo3='';
  contenido1='';

  subtitulo4='';
  subtitulo5='';
  subtitulo6='';
  contenido2='';

  constructor(private http: HttpClient) { }

ngOnInit() {
  this.getInfo();
}
getInfo() {
  this.http.get('https://www.themyt.com/UAMI/get_calendario.php').subscribe((data: any)=>{
    console.log(data);
    this.tituloPagina=data[1].valor;
    this.subtituloPagina=data[2].valor;
  
    this.subtitulo1=data[3].valor;
    this.subtitulo2=data[4].valor;
    this.subtitulo3=data[5].valor;
    this.contenido1=data[6].valor;
  
    this.subtitulo4=data[7].valor;
    this.subtitulo5=data[8].valor;
    this.subtitulo6=data[9].valor;
    this.contenido2=data[10].valor;


    
  });
}

}