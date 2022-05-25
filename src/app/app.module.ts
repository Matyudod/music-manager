import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MusicComponent } from './music/music.component';
import { AddMusicComponent } from './add-music/add-music.component';
import { DeleteMusicComponent } from './delete-music/delete-music.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    AddMusicComponent,
    DeleteMusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
