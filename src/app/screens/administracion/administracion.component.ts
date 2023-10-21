import { Component } from '@angular/core';
import { NosotrosService } from 'src/app/services/nosotros.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent {

  constructor( private servicio:NosotrosService){} 

  guardarNosotros(id: string, nom: string, ape:string, email:string, gen: string, auto:string){ 
    const ide: number= parseInt(id)  
    const temp= { 
      "id": ide, 
      "nombre":nom, 
      "apellido": ape, 
      "correo": email, 
      "genero": gen, 
      "modelo_de_auto": auto 
    } 
    this.servicio.postNosotros(temp).subscribe(u=>{}) 
  } 

  actualizarNosotros(id: string, nom: string, ape:string, email:string, gen: string, auto:string){ 
    const ide: number= parseInt(id)  
    const temp= { 
      "id": ide, 
      "nombre":nom, 
      "apellido": ape, 
      "correo": email, 
      "genero": gen, 
      "modelo_de_auto": auto 
    } 
    this.servicio.putNosotros(temp, ide).subscribe() 
  } 

  eliminarNosotros(id: string){ 
    const ide: number= parseInt(id)  
    this.servicio.deleteNosotros(ide).subscribe() 
  } 

}
