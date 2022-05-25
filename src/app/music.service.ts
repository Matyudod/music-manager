import { Injectable } from '@angular/core';
import { Music } from './models/music.model';


@Injectable({
  providedIn: 'root'
})
export class MusicService {
  music: Music[] = [
    {id: 1, name: 'Hydrogen', author: "1.0079", url: 'H'},
    {id: 2, name: 'Helium', author: "4.0026", url: 'He'},
    {id: 3, name: 'Lithium', author: "6.941", url: 'Li'},
    {id: 4, name: 'Beryllium', author: "9.0122", url: 'Be'},
    {id: 5, name: 'Boron', author: "10.811", url: 'B'},
    {id: 6, name: 'Carbon', author: "12.0107", url: 'C'},
    {id: 7, name: 'Nitrogen', author: "14.0067", url: 'N'},
    {id: 8, name: 'Oxygen', author: "15.9994", url: 'O'},
    {id: 9, name: 'Fluorine', author: "18.9984", url: 'F'},
    {id: 10, name: 'Neon', author: "20.1797", url: 'Ne'},
  ]
  
  constructor() { }
  getAllMusic(){
    return this.music;
  }
  addMusic(newMusic : Music){
    this.music.push(newMusic);
  }
}
