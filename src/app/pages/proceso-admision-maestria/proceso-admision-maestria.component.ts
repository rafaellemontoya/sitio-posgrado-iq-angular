import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proceso-admision-maestria',
  templateUrl: './proceso-admision-maestria.component.html',
  styleUrls: ['./proceso-admision-maestria.component.css']
})
export class ProcesoAdmisionMaestriaComponent implements OnInit {

  tituloPagina='';
  subtituloPagina='';

  boton1='';
  boton2='';

 /* Seccion Izquierda Arriba */
 /* Seccion 1 */
  subtitulo1='';
  contenido1='';
 /* Seccion2 */
  subtitulo2='';
  contenido2='';

  boton3='';

  /*Seccion Derecha Arriba*/
  /*  Seccion3 */
  subtitulo3='';
  contenido3='';
 /*Seccion4 */
 subtitulo4='';
 contenido4='';
 /*Seccion5 */
 subtitulo5='';
 contenido5='';
 /*Seccion6 */
 subtitulo6='';
 contenido6='';
 /*Seccion7 */
 subtitulo7='';
 contenido7='';
  /*Seccion8 */
  subtitulo8='';
  contenido8='';

/* Seccion Abajo Izquierda */

  /*Seccion9 */
  subtitulo9='';
  contenido9='';
  /*Seccion10 */
  subtitulo10='';
  contenido10='';

  boton4='';

/* Seccion Abajo Derecha */


  /*Seccion11 */
  subtitulo11='';
  contenido11='';

  /*  Seccion12 */
    subtitulo12='';
    contenido12='';
   /*Seccion13 */
   subtitulo13='';
   contenido13='';
   /*Seccion14 */
   subtitulo14='';
   contenido14='';
   /*Seccion15 */
   subtitulo15='';
   contenido15='';
   /*Seccion16 */
   subtitulo16='';
   contenido16='';
    /*Seccion17 */
    subtitulo17='';
    contenido17='';
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

getInfo() {
  this.http.get('https://www.themyt.com/UAMI/get_proceso_admision_maestria.php').subscribe((data: any)=>{
    console.log(data);
    this.tituloPagina=data[0].valor;
    this.subtituloPagina=data[1].valor;

  
      this.boton1=data[4].valor;
      this.boton1=data[5].valor;

     /* Seccion Izquierda Arriba */
 /* Seccion 1 */
  this.subtitulo1=data[6].valor;
  this.contenido1=data[7].valor;
 /* Seccion2 */
  this.subtitulo2=data[8].valor;
  this.contenido2=data[9].valor;

  this.boton3=data[10].valor;

  /*Seccion Derecha Arriba*/
  /*  Seccion3 */
  this.subtitulo3=data[11].valor;
  this.contenido3=data[12].valor;
 /*Seccion4 */
 this.subtitulo4=data[13].valor;
 this.contenido4=data[14].valor;
 /*Seccion5 */
 this.subtitulo5=data[15].valor;
 this.contenido5=data[16].valor;
 /*Seccion6 */
 this.subtitulo6=data[17].valor;
 this.contenido6=data[18].valor;
 /*Seccion7 */
 this.subtitulo7=data[19].valor;
 this.contenido7=data[20].valor;
  /*Seccion8 */
  this.subtitulo8=data[21].valor;
  this.contenido8=data[22].valor;

/* Seccion Abajo Izquierda */

  /*Seccion9 */
  this.subtitulo9=data[23].valor;
  this.contenido9=data[24].valor;
  /*Seccion10 */
  this.subtitulo10=data[25].valor;
  this.contenido10=data[26].valor;

  this.boton4=data[27].valor;

/* Seccion Abajo Derecha */


  /*Seccion11 */
  this.subtitulo11=data[28].valor;
  this.contenido11=data[29].valor;

  /*  Seccion12 */
    this.subtitulo12=data[30].valor;
    this.contenido12=data[31].valor;
   /*Seccion13 */
   this.subtitulo13=data[32].valor;
   this.contenido13=data[33].valor;
   /*Seccion14 */
   this.subtitulo14=data[34].valor;
   this.contenido14=data[35].valor;
   /*Seccion15 */
   this.subtitulo15=data[36].valor;
   this.contenido15=data[37].valor;
   /*Seccion16 */
   this.subtitulo16=data[38].valor;
   this.contenido16=data[39].valor;
    /*Seccion17 */
    this.subtitulo17=data[40].valor;
    this.contenido17=data[41].valor;
  

  
  });
}

}