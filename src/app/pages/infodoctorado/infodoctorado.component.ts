import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infodoctorado',
  templateUrl: './infodoctorado.component.html',
  styleUrls: ['./infodoctorado.component.css']
})
export class InfodoctoradoComponent implements OnInit {

  tituloPagina='';
  subtituloPagina='';

 /* Seccion1 */
  tituloS1='';
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

 

  constructor(private http: HttpClient) { }

ngOnInit() {
  this.getInfo();
}
getInfo() {
  this.http.get('https://www.themyt.com/UAMI/get_info_maestrias.php').subscribe((data: any)=>{
    console.log(data);
    this.tituloPagina=data[0].valor;
    this.subtituloPagina=data[1].valor;

     /* Seccion1 */
      this.tituloS1=data[3].valor;
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

  
  });
}

}

