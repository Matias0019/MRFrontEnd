import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombre: string = '';
  linkproyecto: string = '';
  descripcion: string = '';
  img: string = '';

  constructor(private proyectoS: ProyectoService, private activatedRouter: ActivatedRoute, private router:Router, public imageService:ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombre, this.linkproyecto, this.descripcion, this.img);
    this.proyectoS.save(proyecto).subscribe(data=>{
      alert("Proyecto anadido");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }

  uploadImage($event:any){
    let id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imageService.uploadImage($event, name)
  }

}
