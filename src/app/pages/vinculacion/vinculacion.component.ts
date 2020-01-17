import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vinculacion',
  templateUrl: './vinculacion.component.html',
  styleUrls: ['./vinculacion.component.css']
})
export class VinculacionComponent implements OnInit {

  tituloPagina='';
  subtituloPagina='';
  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getInfo();
  }
  getInfo() {
    this.http.get('https://www.themyt.com/UAMI/get_lineamientos.php').subscribe((data: any)=>{
      console.log(data);
      this.tituloPagina=data[1].valor;
      this.subtituloPagina=data[2].valor;

    });
  }
  
  }