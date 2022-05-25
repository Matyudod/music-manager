import { Component, OnInit } from '@angular/core';
import { Music } from '../models/music.model';
import { MusicService } from '../music.service';



@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  musicService = new MusicService;
  columns = [
    {
      columnDef: 'ID',
      header: 'No.',
      cell: (element: Music) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Music) => `${element.name}`,
    },
    {
      columnDef: 'url',
      header: 'Url',
      cell: (element: Music) => `${element.url}`,
    },
  ];

  dataSource = this.musicService.getAllMusic();
  displayedColumns = this.columns.map(c => c.columnDef);
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
