import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = "";;
  descripcionE: string = "";
  showModal(){}

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(data => {
      Swal.fire('Nueva Experiencia', `Experiencia ${this.nombreE} creada con exito`, 'success');
      this.router.navigate(['']);
    }, err => {
      Swal.fire('Nueva Experiencia', `Error al crear la Experiencia ${this.nombreE}`, 'error');
      this.router.navigate(['']);
    }
    );
}
}