import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proyectos-investigacion-doctorado',
  templateUrl: './proyectos-investigacion-doctorado.component.html',
  styleUrls: ['./proyectos-investigacion-doctorado.component.css']
})
export class ProyectosInvestigacionDoctoradoComponent implements OnInit {

  tituloPagina='';
  subtituloPagina1='';
  subtituloPagina2='';

  /* Esquina Superior Izquierda (renglon1 columna1)*/
subtitulo1='';
contenido1='';
contenido2='';
  /* Esquina Superior Izquierda (renglon2 columna1)*/
  subtitulo2='';
  contenido3='';
  contenido4='';
    /* Esquina Superior Izquierda (renglon3 columna1)*/
subtitulo3='';
contenido5='';
contenido6='';

  /* Esquina Superior Izquierda (renglon2 columna2)*/
  subtitulo4='';
  contenido7='';
  contenido8='';
  /* Esquina Superior Izquierda (renglon2 columna2)*/
  subtitulo5='';
  contenido9='';
  contenido10='';
    /* Esquina Superior Izquierda (renglon2 columna2)*/
  subtitulo6='';
  contenido11='';
  contenido12='';



  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getInfo();
  }
  getInfo() {
    this.http.get('https://www.themyt.com/UAMI/get_proyectos_investigacion_doctorado.php').subscribe((data: any)=>{
      console.log(data);
      this.tituloPagina=data[1].valor;
      this.subtituloPagina1=data[2].valor;
      this.subtituloPagina2=data[3].valor;
    
      /* Esquina Superior Izquierda (renglon1 columna1)*/
    this.subtitulo1=data[4].valor;
    this.contenido1=data[5].valor;
    this.contenido2=data[6].valor;
      /* Esquina Superior Izquierda (renglon1 columna2)*/
    this.subtitulo2=data[7].valor;
    this.contenido3=data[8].valor;
    this.contenido4=data[9].valor;
        /* Esquina Superior Izquierda (renglon1 columna3)*/
    this.subtitulo3=data[10].valor;
    this.contenido5=data[11].valor;
    this.contenido6=data[12].valor;
    
      /* Esquina Superior Izquierda (renglon2 columna1)*/
    this.subtitulo4=data[13].valor;
    this.contenido7=data[14].valor;
    this.contenido8=data[15].valor;
      /* Esquina Superior Izquierda (renglon2 columna1)*/
     this.subtitulo5=data[16].valor;
     this.contenido9=data[17].valor;
     this.contenido10=data[18].valor;
        /* Esquina Superior Izquierda (renglon2 columna1)*/
     this.subtitulo6=data[19].valor;
     this.contenido11=data[20].valor;
     this.contenido12=data[21].valor;

    });
  }
  
  }