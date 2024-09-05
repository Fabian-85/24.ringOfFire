import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from '../player/player.component';
import { Game } from './../../game';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {FormsModule} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AddDialogPlayerComponent } from '../add-dialog-player/add-dialog-player.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GameInfoCardComponent } from '../game-info-card/game-info-card.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent,MatButtonModule,MatIconModule,MatDialogModule, GameInfoCardComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  pickCardAnimation = false;
  game: Game   = new Game();;
  currentCard: string | undefined;

  constructor(public dialog: MatDialog) {
   
  }

  ngOnInit() {}

  takeCard() {
    if( this.pickCardAnimation == false){ 
    this.currentCard = this.game?.stack.pop();
    this.pickCardAnimation = true;
    }
    setTimeout(()=>{
      this.pickCardAnimation = false;
      this.game?.playedCard.push(this.currentCard);
      this.game.currentPlayer++;
      this.game.currentPlayer=this.game.currentPlayer%this.game.players.length;
     
    },1500);
  }

  newGame() {
    this.game = new Game();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialogPlayerComponent, {
      
    });

    dialogRef.afterClosed().subscribe(name => {
      console.log('The dialog was closed');
      if (name !== undefined && name.length>0) {
        this.game?.players.push(name);
      }
    });
  }

}
