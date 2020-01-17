import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lineamientos',
  templateUrl: './lineamientos.component.html',
  styleUrls: ['./lineamientos.component.css']
})
export class LineamientosComponent implements OnInit {
  tituloPagina='';
  subtituloPagina='';
  /*Primera Seccion*/
  tituloseccion1='';

  contenido1='';

  subtitulo2='';
  contenido2='';

  subtitulo3='';
  contenido3='';

  subtitulo4='';
  contenido4='';

  /*Segunda Seccion*/
  tituloseccion2='';

  contenido5='';

  subtitulo6='';
  contenido6='';

  subtitulo7='';
  contenido7='';

  subtitulo8='';
  contenido8='';

  subtitulo9='';
  contenido9='';

  subtitulo10='';
  contenido10='';
  
  subtitulo11='';
  contenido11='';

  subtitulo12='';
  contenido12='';

  /*Tercera Seccion*/
  tituloseccion3='';
  contenido13='';

  boton='';


  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getInfo();
  }
  getInfo() {
    this.http.get('https://www.themyt.com/UAMI/get_lineamientos.php').subscribe((data: any)=>{
      console.log(data);
      this.tituloPagina=data[1].valor;
      this.subtituloPagina=data[2].valor;
      /*Primera Seccion*/
      this.tituloseccion1=data[3].valor;
    
      this.contenido1=data[4].valor;
    
      this.subtitulo2=data[5].valor;
      this.contenido2=data[6].valor;
    
      this.subtitulo3=data[7].valor;
      this.contenido3=data[8].valor;
    
      this.subtitulo4=data[9].valor;
      this.contenido4=data[10].valor;
    
      /*Segunda Seccion*/
      this.tituloseccion2=data[11].valor;
    
      this.contenido5=data[12].valor;
    
      this.subtitulo6=data[13].valor;
      this.contenido6=data[14].valor;
    
      this.subtitulo7=data[15].valor;
      this.contenido7=data[16].valor;
    
      this.subtitulo8=data[17].valor;
      this.contenido8=data[18].valor;
    
      this.subtitulo9=data[19].valor;
      this.contenido9=data[20].valor;
    
      this.subtitulo10=data[21].valor;
      this.contenido10=data[22].valor;
      
      this.subtitulo11=data[23].valor;
      this.contenido11=data[24].valor;
    
      this.subtitulo12=data[25].valor;
      this.contenido12=data[26].valor;
    
      /*Tercera Seccion*/
      this.tituloseccion3=data[27].valor;
      this.contenido13=data[28].valor;
    
      this.boton=data[29].valor;
    
    });
  }
  
  }