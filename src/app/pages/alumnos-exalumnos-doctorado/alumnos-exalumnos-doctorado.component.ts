import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alumnos-exalumnos-doctorado',
  templateUrl: './alumnos-exalumnos-doctorado.component.html',
  styleUrls: ['./alumnos-exalumnos-doctorado.component.css']
})
export class AlumnosExalumnosDoctoradoComponent implements OnInit {

  tituloPagina='';
  subtituloPagina='';

  /*Imagen esquina suprerior izquierda (renglon 1 columna 1) */
  nombreimagen1='';
  subtituloimagen1='';
   /*Imagen (renglon 1 columna 2) */
   nombreimagen2='';
   subtituloimagen2='';
    /*Imagen (renglon 1 columna 3) */
  nombreimagen3='';
  subtituloimagen3='';
   /*Imagen (renglon 1 columna 4) */
   nombreimagen4='';
   subtituloimagen4='';

  /*Imagen (renglon 2 columna 1) */
  nombreimagen5='';
  subtituloimagen5='';
   /*Imagen (renglon 2 columna 2) */
   nombreimagen6='';
   subtituloimagen6='';
    /*Imagen (renglon 2 columna 3) */
  nombreimagen7='';
  subtituloimagen7='';
   /*Imagen (renglon 2 columna 4) */
   nombreimagen8='';
   subtituloimagen8='';

   /*Imagen (renglon 3 columna 1) */
  nombreimagen9='';
  subtituloimagen9='';
   /*Imagen (renglon 3 columna 2) */
   nombreimagen10='';
   subtituloimagen10='';
   /*Imagen (renglon 3 columna 3) */
  nombreimagen11='';
  subtituloimagen11='';
   /*Imagen (renglon 3 columna 4) */
   nombreimagen12='';
   subtituloimagen12='';

   /* Botones de navegacion de galeria */
  botonanterior='';
  boton1='';
  boton2='';
  boton3='';
  boton4='';
  boton5='';
  boton6='';
  boton7='';
  boton8='';
  boton9='';
  botonsiguiente='';

  constructor(private http: HttpClient) { }

ngOnInit() {
  this.getInfo();
}
getInfo() {
  this.http.get('https://www.themyt.com/UAMI/get_alumnos_exalumnos_doctorado.php').subscribe((data: any)=>{
    console.log(data);

    this.tituloPagina=data[1].valor;
    this.subtituloPagina=data[2].valor;
  
    /*Imagen esquina suprerior izquierda (renglon 1 columna 1) */
    this.nombreimagen1=data[3].valor;
    this.subtituloimagen1=data[4].valor;
     /*Imagen (renglon 1 columna 2) */
     this.nombreimagen2=data[5].valor;
     this.subtituloimagen2=data[6].valor;
      /*Imagen (renglon 1 columna 3) */
    this.nombreimagen3=data[7].valor;
    this.subtituloimagen3=data[8].valor;
     /*Imagen (renglon 1 columna 4) */
     this.nombreimagen4=data[9].valor;
     this.subtituloimagen4=data[10].valor;
  
    /*Imagen (renglon 2 columna 1) */
    this.nombreimagen5=data[11].valor;
    this.subtituloimagen5=data[12].valor;
     /*Imagen (renglon 2 columna 2) */
    this.nombreimagen6=data[13].valor;
    this.subtituloimagen6=data[14].valor;
      /*Imagen (renglon 2 columna 3) */
    this.nombreimagen7=data[15].valor;
    this.subtituloimagen7=data[16].valor;
     /*Imagen (renglon 2 columna 4) */
     this.nombreimagen8=data[17].valor;
     this.subtituloimagen8=data[18].valor;
  
     /*Imagen (renglon 3 columna 1) */
    this.nombreimagen9=data[19].valor;
    this.subtituloimagen9=data[20].valor;
     /*Imagen (renglon 3 columna 2) */
     this.nombreimagen10=data[21].valor;
     this.subtituloimagen10=data[22].valor;
     /*Imagen (renglon 3 columna 3) */
    this.nombreimagen11=data[23].valor;
    this.subtituloimagen11=data[24].valor;
     /*Imagen (renglon 3 columna 4) */
    this.nombreimagen12=data[25].valor;
    this.subtituloimagen12=data[26].valor;
  
  
     /* Botones de navegacion de galeria */
    this.botonanterior=data[27].valor;
    this.boton1=data[28].valor;
    this.boton2=data[29].valor;
    this.boton3=data[30].valor;
    this.boton4=data[31].valor;
    this.boton5=data[32].valor;
    this.boton6=data[33].valor;
    this.boton7=data[34].valor;
    this.boton8=data[35].valor;
    this.boton9=data[36].valor;
    this.botonsiguiente=data[37].valor;
  });
}

}
