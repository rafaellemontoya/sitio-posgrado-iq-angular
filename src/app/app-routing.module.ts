import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { InfomaestriasComponent } from './pages/infomaestrias/infomaestrias.component';
import {PerfilesMaestriaComponent} from './pages/perfiles-maestria/perfiles-maestria.component';
import { PlanEstudiosMaestriaComponent } from './pages/plan-estudios-maestria/plan-estudios-maestria.component';
import { ProcesoAdmisionMaestriaComponent } from './pages/proceso-admision-maestria/proceso-admision-maestria.component';
import { ProcesoExamenGradoMaestriaComponent } from './pages/proceso-examen-grado-maestria/proceso-examen-grado-maestria.component';
import { AlumnosExalumnosMaestriaComponent } from './pages/alumnos-exalumnos-maestria/alumnos-exalumnos-maestria.component';
/*Paginas del doctorado*/
import { InfodoctoradoComponent } from './pages/infodoctorado/infodoctorado.component';
import { PerfilesDoctoradoComponent } from './pages/perfiles-doctorado/perfiles-doctorado.component';
import { PlanEstudiosDoctoradoComponent } from './pages/plan-estudios-doctorado/plan-estudios-doctorado.component';
import { ProcesoAdmisionDoctoradoComponent } from './pages/proceso-admision-doctorado/proceso-admision-doctorado.component';
import { ProcesoExamenGradoDoctoradoComponent } from './pages/proceso-examen-grado-doctorado/proceso-examen-grado-doctorado.component';
import { AlumnosExalumnosDoctoradoComponent } from './pages/alumnos-exalumnos-doctorado/alumnos-exalumnos-doctorado.component';

/*Fin de Paginas del Doctorado*/
import { LineamientosComponent } from './pages/lineamientos/lineamientos.component';
import { InfraestructuraComponent } from './pages/infraestructura/infraestructura.component';
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



const routes: Routes = [{path: '', component: InicioComponent },
{path: 'info-maestrias', component: InfomaestriasComponent },
{path: 'perfiles-maestria', component: PerfilesMaestriaComponent },
{path: 'plan-estudios-maestria', component: PlanEstudiosMaestriaComponent },
{path: 'proceso-admision-maestria', component: ProcesoAdmisionMaestriaComponent },
{path: 'proceso-examen-grado-maestria', component: ProcesoExamenGradoMaestriaComponent },
{path: 'alumnos-exalumnos-maestria', component: AlumnosExalumnosMaestriaComponent },
/*Paginas del doctorado*/
{path: 'infodoctorado', component: InfodoctoradoComponent },
{path: 'perfiles-doctorado', component:  PerfilesDoctoradoComponent},
{path: 'plan-estudios-doctorado', component: PlanEstudiosDoctoradoComponent },
{path: 'proceso-admision-doctorado', component: ProcesoAdmisionDoctoradoComponent },
{path: 'proceso-examen-grado-doctorado', component: ProcesoExamenGradoDoctoradoComponent },
{path: 'alumnos-exalumnos-doctorado', component: AlumnosExalumnosDoctoradoComponent },

/*Fin de Paginas del Doctorado*/
{path: 'lineamientos', component: LineamientosComponent },
{path: 'infraestructura', component: InfraestructuraComponent },
{path: 'informacion-estadistica', component: InformacionEstadisticaComponent },
{path: 'movilidad', component: MovilidadComponent },
{path: 'vinculacion', component: VinculacionComponent },
{path: 'profesores', component: ProfesoresComponent },
{path: 'articulos-de-investigacion', component:  ArticulosDeInvestigacionComponent },
{path: 'libros-especializados', component:  LibrosEspecializadosComponent },
{path: 'proyectos-investigacion-maestria', component:  ProyectosInvestigacionMaestriaComponent },
{path: 'proyectos-investigacion-doctorado', component:  ProyectosInvestigacionDoctoradoComponent },
{path: 'calendario', component:  CalendarioComponent },
{path: 'plan-trimestral', component:  PlanTrimestralComponent },
{path: 'becas', component: BecasComponent },





{ path: '**', pathMatch: 'full', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
