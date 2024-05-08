import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckCheck, LucideAngularModule, Globe, Download, Star, HandHeart, Lightbulb, MessagesSquare, Plus, EllipsisVertical, Heart } from 'lucide-angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, LucideAngularModule.pick({ CheckCheck, Globe, Download, Star, HandHeart, Lightbulb, MessagesSquare, Plus, EllipsisVertical, Heart }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
