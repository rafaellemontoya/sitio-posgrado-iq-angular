import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plan-trimestral',
  templateUrl: './plan-trimestral.component.html',
  styleUrls: ['./plan-trimestral.component.css']
})
export class PlanTrimestralComponent implements OnInit {
  tituloPagina='';
  subtituloPagina='';

  subtitulo1='';
  contenido1='';

  subtitulo2='';
  contenido2='';
  boton2='';

  subtitulo3='';
  contenido3='';
  boton3='';

  subtitulo4='';
  contenido4='';
  boton4='';

  subtitulo5='';
  contenido5='';
  boton5='';

  constructor(private http: HttpClient) { }

ngOnInit() {
  this.getInfo();
}
getInfo() {
  this.http.get('https://www.themyt.com/UAMI/get_plan_trimestral.php').subscribe((data: any)=>{
    console.log(data);
    this.tituloPagina=data[1].valor;
    this.subtituloPagina=data[2].valor;
  
    this.subtitulo1=data[3].valor;
    this.contenido1=data[4].valor;
  
    this.subtitulo2=data[5].valor;
    this.contenido2=data[6].valor;
    this.boton2=data[7].valor;
  
    this.subtitulo3=data[8].valor;
    this.contenido3=data[9].valor;
    this.boton3=data[10].valor;
  
    this.subtitulo4=data[11].valor;
    this.contenido4=data[12].valor;
    this.boton4=data[13].valor;
  
    this.subtitulo5=data[14].valor;
    this.contenido5=data[15].valor;
    this.boton5=data[16].valor;
        
  });
}

}
