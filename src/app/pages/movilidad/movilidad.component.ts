import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movilidad',
  templateUrl: './movilidad.component.html',
  styleUrls: ['./movilidad.component.css']
})
export class MovilidadComponent implements OnInit {
  tituloPagina='';
  subtituloPagina='';

  /*Primer Renglón */
  /*Esquina superior Izquierda (primer renglón primera columna)*/
  titulo1='';
  contenido1='';
 /* Renglon 1 Columna2 */
  titulo2='';
  subtitulo2='';
  contenido2='';

  /*Renglon 1 Colimna3 */
  titulo3='';
  subtitulo3='';
  contenido3='';

  /*Renglon 2 Colimna1 */
  titulo4='';
  boton1='';
  boton2='';

   /* Renglon 2 Columna2 */
   titulo5='';
   subtitulo5='';
   contenido5='';
 
   /*Renglon 2 Colimna3 */
   titulo6='';
   subtitulo6='';
   contenido6='';

   /* Botones de desplazamiento*/
   botonPrev='';
   boton3='';
   boton4='';
   boton5='';
   boton6='';
   boton7='';
   boton8='';
   boton9='';
   boton10='';
   boton11='';
   boton12='';
   boton13='';
   botonNext='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getInfo();
  }
  getInfo() {
    this.http.get('https://www.themyt.com/UAMI/get_movilidad.php').subscribe((data: any)=>{
      console.log(data);

  this.tituloPagina=data[1].valor;
  this.subtituloPagina=data[2].valor;


  /*Primer Renglón */
  /*Esquina superior Izquierda (primer renglón primera columna)*/
  this.titulo1=data[3].valor;
  this.contenido1=data[4].valor;
 /* Renglon 1 Columna2 */
  this.titulo2=data[5].valor;
  this.subtitulo2=data[6].valor;
  this.contenido2=data[7].valor;

  /*Renglon 1 Colimna3 */
  this.titulo3=data[8].valor;
  this.subtitulo3=data[9].valor;
  this.contenido3=data[10].valor;

  /*Renglon 2 Colimna1 */
  this.titulo4=data[11].valor;
  this.boton1=data[12].valor;
  this.boton2=data[13].valor;

   /* Renglon 2 Columna2 */
   this.titulo5=data[14].valor;
   this.subtitulo5=data[15].valor;
   this.contenido5=data[16].valor;
 
   /*Renglon 2 Colimna3 */
   this.titulo6=data[17].valor;
   this.subtitulo6=data[18].valor;
   this.contenido6=data[19].valor;

   /* Botones de desplazamiento*/
   this.botonPrev=data[20].valor;
   this.boton3=data[21].valor;
   this.boton4=data[22].valor;
   this.boton5=data[23].valor;
   this.boton6=data[24].valor;
   this.boton7=data[25].valor;
   this.boton8=data[26].valor;
   this.boton9=data[27].valor;
   this.boton10=data[28].valor;
   this.boton11=data[29].valor;
   this.boton12=data[30].valor;
   this.boton13=data[31].valor;
   this.botonNext=data[32].valor;

    });
  }
  
  }