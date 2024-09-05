import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starscreen',
  standalone: true,
  imports: [],
  templateUrl: './starscreen.component.html',
  styleUrl: './starscreen.component.scss'
})
export class StarscreenComponent {
  constructor(private router:Router){

  }

  newGame() {
  this.router.navigateByUrl('/game');
}
}
