import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // *ngFor
  listEstudiantes: any[] = [
    { nombre: 'Teddy Summers', estado: 'Promocionado' },
    { nombre: 'Paul Mc', estado: 'Regular' },
    { nombre: 'Cristina Marin', estado: 'Regular' }
  ]
  listEstudiantes2: any[] = [
    // { nombre: 'Teddy Summers', estado: 'Promocionado' },
    // { nombre: 'Paul Mc', estado: 'Regular' },
    // { nombre: 'Cristina Marin', estado: 'Regular' }
  ]
  listEstudiantes3: any[] = [
    { nombre: 'Teddy Summers', estado: 'Promocionado' },
    { nombre: 'Paul Mc', estado: 'Regular' },
    { nombre: 'Cristina Marin', estado: 'Regular' }
  ]
  listEstudiantes4: any[] = [
    { nombre: 'Teddy Summers', estado: 'Promocionado' },
    { nombre: 'Paul Mc', estado: 'Regular' },
    { nombre: 'Cristina Marin', estado: 'Regular' },
    { nombre: 'Veronica Gonzales', estado: 'Promocionado' }
  ]
  listEstudiantes5: any[] = [
    { nombre: 'Teddy Summers', estado: 'Promocionado' },
    { nombre: 'Paul Mc', estado: 'Regular' },
    { nombre: 'Cristina Marin', estado: 'Libre' },
    { nombre: 'Veronica Gonzales', estado: 'Promocionado' }
  ]

  // *ngIf
  mostrar = true;
  toogle(): void {
    this.mostrar = !this.mostrar
  }

  // *ngStyle
  // todo se hace en el HTML

  // *ngClass
  // todo se hace en el HTML
  // *ngSwitch

}
