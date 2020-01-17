import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proceso-examen-grado-doctorado',
  templateUrl: './proceso-examen-grado-doctorado.component.html',
  styleUrls: ['./proceso-examen-grado-doctorado.component.css']
})
export class ProcesoExamenGradoDoctoradoComponent implements OnInit {


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
    /* Seccion4 */
     subtitulo4='';
     contenido4='';
    /* Seccion5 */
     subtitulo5='';
     contenido5='';
    /*boton*/
    boton='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getInfo();
  }
  getInfo() {
    this.http.get('https://www.themyt.com/UAMI/get_proceso_examen_grado_doctorado.php').subscribe((data: any)=>{
      console.log(data);
      this.tituloPagina=data[0].valor;
      this.subtituloPagina=data[1].valor;
  
       /* Seccion1 */
        this.subtitulo1=data[2].valor;
        this.contenido1=data[3].valor;
       /* Seccion2 */
        this.subtitulo2=data[4].valor;
        this.contenido2=data[5].valor;
      /*  Seccion3 */
        this.subtitulo3=data[6].valor;
        this.contenido3=data[7].valor;
        /* Seccion4 */
        this.subtitulo4=data[8].valor;
        this.contenido4=data[9].valor;
       /* Seccion5 */
        this.subtitulo5=data[10].valor;
        this.contenido5=data[11].valor;
       /* boton */
       this.boton=data[12].valor;


    
    });
  }
  
  }
