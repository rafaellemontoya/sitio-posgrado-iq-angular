import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plan-estudios-maestria',
  templateUrl: './plan-estudios-maestria.component.html',
  styleUrls: ['./plan-estudios-maestria.component.css']
})
export class PlanEstudiosMaestriaComponent implements OnInit {

  
  tituloPagina='';
  subtituloPagina='';

 /* Seccion1 */
  subtitulo1='';
  contenido1='';
 /* Seccion2 */
  subtitulo2='';
  contenido2='';
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
  /*Seccion9 */
  subtitulo9='';
  contenido9='';
  /*Seccion10 */
  subtitulo10='';
  contenido10='';
  /*Seccion11 */
  subtitulo11='';
  contenido11='';

  constructor(private http: HttpClient) { }

ngOnInit() {
  this.getInfo();
}
getInfo() {
  this.http.get('https://www.themyt.com/UAMI/plan_estudios_maestria.php').subscribe((data: any)=>{
    console.log(data);
    this.tituloPagina=data[0].valor;
    this.subtituloPagina=data[1].valor;

     /* Seccion1 */
  
      this.subtitulo1=data[4].valor;
      this.contenido1=data[5].valor;
     /* Seccion2 */
      this.subtitulo2=data[6].valor;
      this.contenido2=data[7].valor;
    /*  Seccion3 */
      this.subtitulo3=data[8].valor;
      this.contenido3=data[9].valor;
     /*Seccion4 */
     this.subtitulo4=data[10].valor;
     this.contenido4=data[11].valor;
     /*Seccion5 */
     this.subtitulo5=data[12].valor;
     this.contenido5=data[13].valor;
     /*Seccion6 */
     this.subtitulo6=data[14].valor;
     this.contenido6=data[15].valor;
     /*Seccion7 */
     this.subtitulo7=data[16].valor;
     this.contenido7=data[17].valor;
    /*Seccion8 */
    this.subtitulo8=data[18].valor;
    this.contenido8=data[19].valor;
    /*Seccion9 */
    this.subtitulo9=data[20].valor;
    this.contenido9=data[21].valor;
    /*Seccion10 */
    this.subtitulo10=data[22].valor;
    this.contenido10=data[23].valor;
    /*Seccion11 */
    this.subtitulo11=data[24].valor;
    this.contenido11=data[25].valor;

  
  });
}

}
