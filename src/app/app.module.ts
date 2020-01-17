import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './pages/about/about.component';
import { InfomaestriasComponent } from './pages/infomaestrias/infomaestrias.component';
import { PerfilesMaestriaComponent } from './pages/perfiles-maestria/perfiles-maestria.component';
import { PlanEstudiosMaestriaComponent } from './pages/plan-estudios-maestria/plan-estudios-maestria.component';
import { ProcesoAdmisionMaestriaComponent } from './pages/proceso-admision-maestria/proceso-admision-maestria.component';
import { ProcesoExamenGradoMaestriaComponent } from './pages/proceso-examen-grado-maestria/proceso-examen-grado-maestria.component';
import { AlumnosExalumnosMaestriaComponent } from './pages/alumnos-exalumnos-maestria/alumnos-exalumnos-maestria.component';
import { InfodoctoradoComponent } from './pages/infodoctorado/infodoctorado.component';
import { PerfilesDoctoradoComponent } from './pages/perfiles-doctorado/perfiles-doctorado.component';
import { LineamientosComponent } from './pages/lineamientos/lineamientos.component';
import { InfraestructuraComponent } from './pages/infraestructura/infraestructura.component';
import { PlanEstudiosDoctoradoComponent } from './pages/plan-estudios-doctorado/plan-estudios-doctorado.component';
import { ProcesoAdmisionDoctoradoComponent } from './pages/proceso-admision-doctorado/proceso-admision-doctorado.component';
import { AlumnosExalumnosDoctoradoComponent } from './pages/alumnos-exalumnos-doctorado/alumnos-exalumnos-doctorado.component';
import { ProcesoExamenGradoDoctoradoComponent } from './pages/proceso-examen-grado-doctorado/proceso-examen-grado-doctorado.component';
import { InformacionEstadisticaComponent } from './pages/informacion-estadistica/informacion-estadistica.component';
import { MovilidadComponent } from './pages/movilidad/movilidad.component';
import { VinculacionComponent } from './pages/vinculacion/vinculacion.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { ArticulosDeInvestigacionComponent } from './pages/articulos-de-investigacion/articulos-de-investigacion.component';
import { LibrosEspecializadosComponent } from './pages/libros-especializados/libros-especializados.component';
import { ProyectosInvestigacionMaestriaComponent } from './pages/proyectos-investigacion-maestria/proyectos-investigacion-maestria.component';
import { ProyectosInvestigacionDoctoradoComponent } from './pages/proyectos-investigacion-doctorado/proyectos-investigacion-doctorado.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { PlanTrimestralComponent } from './pages/plan-trimestral/plan-trimestral.component';
import { BecasComponent } from './pages/becas/becas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    AboutComponent,
    InfomaestriasComponent,
    PerfilesMaestriaComponent,
    PlanEstudiosMaestriaComponent,
    ProcesoAdmisionMaestriaComponent,
    ProcesoExamenGradoMaestriaComponent,
    AlumnosExalumnosMaestriaComponent,
    InfodoctoradoComponent,
    PerfilesDoctoradoComponent,
    LineamientosComponent,
    InfraestructuraComponent,
    PlanEstudiosDoctoradoComponent,
    ProcesoAdmisionDoctoradoComponent,
    AlumnosExalumnosDoctoradoComponent,
    ProcesoExamenGradoDoctoradoComponent,
    InformacionEstadisticaComponent,
    MovilidadComponent,
    VinculacionComponent,
    ProfesoresComponent,
    ArticulosDeInvestigacionComponent,
    LibrosEspecializadosComponent,
    ProyectosInvestigacionMaestriaComponent,
    ProyectosInvestigacionDoctoradoComponent,
    CalendarioComponent,
    PlanTrimestralComponent,
    BecasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
