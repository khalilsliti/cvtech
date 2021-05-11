import { ProviderAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PremierService } from '../services/premier.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  providers:[PremierService]
})
export class ColorComponent implements OnInit {

  constructor(private premierService:PremierService,
              private router:Router,
              private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params)=>
    {  
      console.log(params);
      this.color=params.mycolor
    })
  }
color="red"


getdatafromchild(message:any)
{
  alert(message)
}
showdata(){this.premierService.logger("hey man")}
gotocv()
{
  const link=['cv']
this.router.navigate(link);
}
}