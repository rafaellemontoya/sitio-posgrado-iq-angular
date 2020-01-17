import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infraestructura',
  templateUrl: './infraestructura.component.html',
  styleUrls: ['./infraestructura.component.css']
})
export class InfraestructuraComponent implements OnInit {

  tituloPagina='';
  subtituloPagina='';

  /*Seccion1*/
  tituloseccion1='';
  contenido1='';

  nombreimagen1='';
  descripcionimagen1='';
  nombreimagen2='';
  descripcionimagen2='';
  nombreimagen3='';
  descripcionimagen3='';
  nombreimagen4='';
  descripcionimagen4='';

  /*Seccion2*/
  tituloseccion2='';
  contenido2='';

  nombreimagen5='';
  descripcionimagen5='';
  nombreimagen6='';
  descripcionimagen6='';
  
  /*Seccion3*/
  tituloseccion3='';
  contenido3='';

  nombreimagen7='';
  descripcionimagen7='';
  nombreimagen8='';
  descripcionimagen8='';
  nombreimagen9='';
  descripcionimagen9='';

  /*Seccion4*/
  tituloseccion4='';
  contenido4='';

  nombreimagen10='';
  descripcionimagen10='';
  nombreimagen11='';
  descripcionimagen11='';
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getInfo();
  }
  getInfo() {
    this.http.get('https://www.themyt.com/UAMI/get_infraestructura.php').subscribe((data: any)=>{
      console.log(data);
      this.tituloPagina=data[1].valor;
      this.subtituloPagina=data[2].valor;
      
          /*Seccion1*/
      this.tituloseccion1=data[3].valor;
      this.contenido1=data[4].valor;
      
      this.nombreimagen1=data[5].valor;
      this.descripcionimagen1=data[6].valor;
      this.nombreimagen2=data[7].valor;
      this.descripcionimagen2=data[8].valor;
      this.nombreimagen3=data[9].valor;
      this.descripcionimagen3=data[10].valor;
      this.nombreimagen4=data[11].valor;
      this.descripcionimagen4=data[12].valor;
      
      /*Seccion2*/
      this.tituloseccion2=data[13].valor;
      this.contenido2=data[14].valor;
      
      this.nombreimagen5=data[15].valor;
      this.descripcionimagen5=data[16].valor;
      this.nombreimagen6=data[17].valor;
      this.descripcionimagen6=data[18].valor;
      
      /*Seccion3*/
      this.tituloseccion3=data[19].valor;
      this.contenido3=data[20].valor;
      
      this.nombreimagen7=data[21].valor;
      this.descripcionimagen7=data[22].valor;
      this.nombreimagen8=data[23].valor;
      this.descripcionimagen8=data[24].valor;
      this.nombreimagen9=data[25].valor;
      this.descripcionimagen9=data[26].valor;
      
      /*Seccion4*/
      this.tituloseccion4=data[27].valor;
      this.contenido4=data[28].valor;
      this.nombreimagen10=data[29].valor;
      this.descripcionimagen10=data[30].valor;
      this.nombreimagen11=data[31].valor;
      this.descripcionimagen11=data[32].valor;
       });
      }
      
  }