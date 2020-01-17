import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-informacion-estadistica',
  templateUrl: './informacion-estadistica.component.html',
  styleUrls: ['./informacion-estadistica.component.css']
})
export class InformacionEstadisticaComponent implements OnInit {
  tituloPagina='';
  subtituloPagina='';
  boton1='';
  boton2='';
  /*Seccion de navegacion de archivos (annos) */
  subtitulo='';
  boton3='';
  boton4='';
  boton5='';
  boton6='';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getInfo();
  }
  getInfo() {
    this.http.get('https://www.themyt.com/UAMI/get_informacion_estadistica.php').subscribe((data: any)=>{
      console.log(data);
      this.tituloPagina=data[1].valor;
      this.subtituloPagina=data[2].valor;
      this.boton1=data[3].valor;
      this.boton2=data[4].valor;
      /*Seccion de navegacion de archivos (annos) */
      this.subtitulo=data[5].valor;
      this.boton3=data[6].valor;
      this.boton4=data[7].valor;
      this.boton5=data[8].valor;
      this.boton6=data[9].valor;
  

    });
  }
  
  }
  