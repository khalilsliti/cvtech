import { RouterModule, Routes } from "@angular/router";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { AnotherchildComponent } from "./anotherchild/anotherchild.component";
import { AnotherparentComponent } from "./anotherparent/anotherparent.component";
import { ColorComponent } from "./color/color.component";
import { CvComponent } from "./cvTech/cv/cv.component";
import { DeleteCvComponent } from "./cvTech/delete-cv/delete-cv.component";

import { DetailComponent } from "./cvTech/detail/detail.component";

import { ClassComponent } from "./directive/class/class.component";
import { StyleComponent } from "./directive/style/style.component";
import { FirstchildComponent } from "./firstchild/firstchild.component";
import { LoginComponent } from "./login/login.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { RsimulatorComponent } from "./rsimulator/rsimulator.component";
import { SecondchildComponent } from "./secondchild/secondchild.component";

const APP_ROUTING : Routes = [
    {path:"cv" , children:[
       
        {path:"delete/:id" , component:DeleteCvComponent},
        
        {path:"add" , component:AddCvComponent},
        {path:":id" , component:DetailComponent},
        {path:"" , component: CvComponent},
    ]},
    {path:"" , component: CvComponent},
    {path:"login" , component: LoginComponent},
    {path:"firstchild" , component: FirstchildComponent},
    {path:"secondchild" , component: SecondchildComponent},
    {path:"anotherchild" , component: AnotherchildComponent},
    {path:"anotherparent" , component: AnotherparentComponent},
    {path:"color" , component: ColorComponent},
    {path:"color/:mycolor" , component: ColorComponent},
    {path:"style" , component: StyleComponent},
    {path:"class" , component: ClassComponent},
    {path:"rsimulator" , component: RsimulatorComponent},
    {path:"**", component:NotfoundComponent}

]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)