import { RouterModule, Routes } from "@angular/router";
import { AnotherchildComponent } from "./anotherchild/anotherchild.component";
import { AnotherparentComponent } from "./anotherparent/anotherparent.component";
import { ColorComponent } from "./color/color.component";
import { CvComponent } from "./cvTech/cv/cv.component";
import { ClassComponent } from "./directive/class/class.component";
import { StyleComponent } from "./directive/style/style.component";
import { FirstchildComponent } from "./firstchild/firstchild.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { RsimulatorComponent } from "./rsimulator/rsimulator.component";
import { SecondchildComponent } from "./secondchild/secondchild.component";

const APP_ROUTING : Routes = [
    {path:"cv" , redirectTo:"/" , pathMatch:"full"},
    {path:"" , component: CvComponent},
    {path:"firstchild" , component: FirstchildComponent},
    {path:"secondchild" , component: SecondchildComponent},
    {path:"anotherchild" , component: AnotherchildComponent},
    {path:"anotherparent" , component: AnotherparentComponent},
    {path:"color" , component: ColorComponent},
    {path:"style" , component: StyleComponent},
    {path:"class" , component: ClassComponent},
    {path:"rsimulator" , component: RsimulatorComponent},
    {path:"**", component:NotfoundComponent}

]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)