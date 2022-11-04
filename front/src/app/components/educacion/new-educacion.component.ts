import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreE: string ="";
  descripcionE: string = "";
  showModal(){}

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const educacion = new Educacion (this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      data => {
        Swal.fire('Nueva Educacion', `Educacion ${this.nombreE} creada con exito`, 'success');
        this.router.navigate(['']);
      }, err =>{
        Swal.fire('Nueva Educacion', `Error al crear la Educacion ${this.nombreE}`, 'error');
        this.router.navigate(['']);
      }
    )
}
}
