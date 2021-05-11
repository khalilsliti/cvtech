import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  personne: Personne
  constructor(private activatedRoute:ActivatedRoute,
              private cvService:CvService                                     ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{this.personne=this.cvService.getpersonne(params.id)})
   
  }
  
}
