import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Music } from '../models/music.model';

@Component({
  selector: 'app-delete-music',
  templateUrl: './delete-music.component.html',
  styleUrls: ['./delete-music.component.css']
})
export class DeleteMusicComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: number) { }

  ngOnInit(): void {
  }

}
