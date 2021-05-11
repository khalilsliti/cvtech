import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { SecondchildComponent } from './secondchild/secondchild.component';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';
import { FilsComponent } from './fils/fils.component';
import { AnotherparentComponent } from './anotherparent/anotherparent.component';
import { AnotherchildComponent } from './anotherchild/anotherchild.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultimgPipe } from './cvTech/defaultimg.pipe';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { ROUTING } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RsimulatorComponent } from './rsimulator/rsimulator.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstchildComponent,
    SecondchildComponent,
    ColorComponent,
    FilsComponent,
    AnotherparentComponent,
    AnotherchildComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultimgPipe,
    EmbaucheComponent,
    NavbarComponent,
    NotfoundComponent,
    RsimulatorComponent,
    DetailComponent,
    AddCvComponent,
    DeleteCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ROUTING 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
