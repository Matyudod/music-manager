import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeleteMusicComponent } from './delete-music/delete-music.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-mamager';
  constructor(public dialog: MatDialog) {}
  showDeleteMusic(id: number) {
    this.dialog.open(DeleteMusicComponent, {
      data : id
    });
  }
}
