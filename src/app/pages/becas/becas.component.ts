import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-becas',
  templateUrl: './becas.component.html',
  styleUrls: ['./becas.component.css']
})
export class BecasComponent implements OnInit {
  tituloPagina='';
  subtituloPagina='';
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

  subtitulo10='';
  contenido10='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getInfo();
  }
  getInfo() {
    this.http.get('https://www.themyt.com/UAMI/get_becas.php').subscribe((data: any)=>{
      console.log(data);
      this.tituloPagina=data[1].valor;
      this.subtituloPagina=data[2].valor;
      this.contenido1=data[3].valor;
    
      this.subtitulo2=data[4].valor;
      this.contenido2=data[5].valor;
    
      this.subtitulo3=data[6].valor;
      this.contenido3=data[7].valor;
    
      this.subtitulo4=data[8].valor;
      this.contenido4=data[9].valor;
    
      this.subtitulo5=data[10].valor;
      this.contenido5=data[11].valor;
    
      this.subtitulo6=data[12].valor;
      this.contenido6=data[13].valor;
    
      this.subtitulo7=data[14].valor;
      this.contenido7=data[15].valor;
    
      this.subtitulo8=data[16].valor;
      this.contenido8=data[17].valor;
    
      this.subtitulo9=data[18].valor;
      this.contenido9=data[19].valor;

      this.subtitulo10=data[20].valor;
      this.contenido10=data[21].valor;

    });
  }
  
  }