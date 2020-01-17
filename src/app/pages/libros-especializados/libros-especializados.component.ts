import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-libros-especializados',
  templateUrl: './libros-especializados.component.html',
  styleUrls: ['./libros-especializados.component.css']
})
export class LibrosEspecializadosComponent implements OnInit {
  tituloPagina='';
  subtituloPagina1='';
  subtituloPagina2='';
  /*Botones de navegacion de contenido */
  boton1='';
  boton2='';
  boton3='';
  boton4='';
  boton5='';
  boton6='';
  boton7='';
  boton8='';
  boton9='';

  subtitulo1='';
  contenido1='';

  subtitulo2='';
  contenido2='';

  subtitulo3='';
  contenido3='';

  subtitulo4='';
  contenido4='';

  subtitulo5='';
  contenido5='';

  subtitulo6='';
  contenido6='';

  subtitulo7='';
  contenido7='';

  subtitulo8='';
  contenido8='';

  subtitulo9='';
  contenido9='';



  constructor(private http: HttpClient) { }

ngOnInit() {
  this.getInfo();
}
getInfo() {
  this.http.get('https://www.themyt.com/UAMI/get_libros_especializados.php').subscribe((data: any)=>{
    console.log(data);

    this.tituloPagina=data[1].valor;
    this.subtituloPagina1=data[2].valor;
    this.subtituloPagina2=data[3].valor;


    /*Botones de navegacion de contenido */
    this.boton1=data[4].valor;
    this.boton2=data[5].valor;
    this.boton3=data[6].valor;
    this.boton4=data[7].valor;
    this.boton5=data[8].valor;
    this.boton6=data[9].valor;
    this.boton7=data[10].valor;
    this.boton8=data[11].valor;
    this.boton9=data[12].valor;
  
    this.subtitulo1=data[13].valor;
    this.contenido1=data[14].valor;
    this.subtitulo2=data[15].valor;
    this.contenido2=data[16].valor;
    this.subtitulo3=data[17].valor;
    this.contenido3=data[18].valor;
    this.subtitulo4=data[19].valor;
    this.contenido4=data[20].valor;
    this.subtitulo5=data[21].valor;
    this.contenido5=data[22].valor;
    this.subtitulo6=data[23].valor;
    this.contenido6=data[24].valor;
    this.subtitulo7=data[25].valor;
    this.contenido7=data[26].valor;
    this.subtitulo8=data[27].valor;
    this.contenido8=data[28].valor;
    this.subtitulo9=data[29].valor;
    this.contenido9=data[30].valor;

  });
}

}