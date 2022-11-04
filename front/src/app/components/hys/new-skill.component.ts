import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;
  showModal(){}

  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(
      data => {
        Swal.fire('Nueva Skill', `Skill ${this.nombre} creada con exito`, 'success');
        this.router.navigate(['']);
      }, err =>{
        Swal.fire('Nueva Skill', `Error al crear la Skill ${this.nombre}`, 'error');
        this.router.navigate(['']);
      }
    )
  }
}