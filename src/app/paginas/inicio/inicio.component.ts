import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  /* Sliders */
  slider1imagen = '';
  slider1texto1 = '';
  slider1texto2 = '';
  slider1titulo = '';

  slider2imagen = '';
  slider2texto1 = '';
  slider2texto2 = '';
  slider2titulo = '';

  slider3imagen = '';
  slider3texto1 = '';
  slider3texto2 = '';
  slider3titulo = '';

  /*Noticias */
  noticias1imagen = '';
  noticias1titulo = '';
  noticias1subtitulo = '';
  noticias1contenido = '';

  noticias2imagen = '';
  noticias2titulo = '';
  noticias2subtitulo = '';
  noticias2contenido = '';

  noticias3imagen = '';
  noticias3titulo = '';
  noticias3subtitulo = '';
  noticias3contenido = '';

  /*Sección1 */
  seccion1titulo ='';
  seccion1subtitulo1='';
  seccion1contenido1='';
  seccion1subtitulo2='';
  seccion1contenido2='';
  seccion1subtitulo3='';
  seccion1contenido3='';
  seccion1video='';

  /*Sección2 */
  seccion2titulo ='';
  seccion2imagen_fondo ='';
  seccion2subtitulo1='';
  seccion2titulo1='';
  seccion2contenido1='';
  seccion2link1='';
  seccion2titulo2='';
  seccion2contenido2='';
  seccion2link2='';
  seccion2titulo3='';
  seccion2contenido3='';
  seccion2link3='';

  /*Sección3 */
  seccion3titulo ='';
  seccion3imagen1 ='';
  seccion3titulo1 ='';
  seccion3imagen2 ='';
  seccion3titulo2 ='';
  seccion3imagen3 ='';
  seccion3titulo3 ='';
  seccion3imagen4 ='';
  seccion3titulo4 ='';
  seccion3imagen5 ='';
  seccion3titulo5 ='';
  seccion3imagen6 ='';
  seccion3titulo6 ='';

  /*Sección4 */
  seccion4imagen ='';
  seccion4titulo ='';
  seccion4link ='';

  /*Sección5 */
  seccion5titulo ='';
  seccion5subtitulo ='';
  seccion5imagen1 ='';
  seccion5fecha1 ='';
  seccion5titulo1 ='';
  seccion5contenido1 ='';
  seccion5link1 ='';
  seccion5imagen2 ='';
  seccion5fecha2 ='';
  seccion5titulo2 ='';
  seccion5contenido2 ='';
  seccion5link2 ='';
  seccion5imagen3 ='';
  seccion5fecha3 ='';
  seccion5titulo3 ='';
  seccion5contenido3 ='';
  seccion5link3 ='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getInfo();
  }
  getInfo() {
    this.http.get('https://www.themyt.com/UAMI/get_inicio.php').subscribe((data: any)=>{
      console.log(data);

      /* Sliders */
    this.slider1imagen = data[0].valor;
    this.slider1texto1 = data[1].valor;
    this.slider1texto2 = data[2].valor;
    this.slider1titulo = data[3].valor;

    this.slider2imagen = data[4].valor;
    this.slider2texto1 = data[5].valor;
    this.slider2texto2 = data[6].valor;
    this.slider2titulo = data[7].valor;

    this.slider3imagen = data[8].valor;
    this.slider3texto1 = data[9].valor;
    this.slider3texto2 = data[10].valor;
    this.slider3titulo = data[11].valor;

    /*Noticias */
    this.noticias1imagen = data[12].valor;
    this.noticias1titulo = data[13].valor;
    this.noticias1subtitulo = data[14].valor;
    this.noticias1contenido = data[15].valor;

    this.noticias2imagen = data[16].valor;
    this.noticias2titulo = data[17].valor;
    this.noticias2subtitulo = data[18].valor;
    this.noticias2contenido = data[19].valor;

    this.noticias3imagen = data[20].valor;
    this.noticias3titulo = data[21].valor;
    this.noticias3subtitulo = data[22].valor;
    this.noticias3contenido = data[23].valor;

    /*Sección1 */
    this.seccion1titulo = data[24].valor;
    this.seccion1subtitulo1=data[25].valor;
    this.seccion1contenido1=data[26].valor;
    this.seccion1subtitulo2=data[27].valor;
    this.seccion1contenido2=data[28].valor;
    this.seccion1subtitulo3=data[29].valor;
    this.seccion1contenido3=data[30].valor;
    this.seccion1video=data[31].valor;

    /*Sección2 */
    this.seccion2titulo = data[32].valor;
    this.seccion2imagen_fondo = data[33].valor;
    this.seccion2subtitulo1= data[34].valor;
    this.seccion2titulo1= data[35].valor;
    this.seccion2contenido1= data[36].valor;
    this.seccion2link1= data[37].valor;
    this.seccion2titulo2= data[38].valor;
    this.seccion2contenido2= data[39].valor;
    this.seccion2link2= data[40].valor;
    this.seccion2titulo3= data[41].valor;
    this.seccion2contenido3= data[42].valor;
    this.seccion2link3= data[43].valor;

     /*Sección3 */
    this.seccion3titulo = data[].valor;
    this.seccion3imagen1 ='';
    this.seccion3titulo1 ='';
    this.seccion3imagen2 ='';
    this.seccion3titulo2 ='';
    this.seccion3imagen3 ='';
    this.seccion3titulo3 ='';
    this.seccion3imagen4 ='';
    this.seccion3titulo4 ='';
    this.seccion3imagen5 ='';
    this.seccion3titulo5 ='';
    this.seccion3imagen6 ='';
    this.seccion3titulo6 ='';


    });
  }

}
