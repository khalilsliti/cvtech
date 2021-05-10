import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from 'src/app/services/cv.service';
import { PremierService } from 'src/app/services/premier.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  personnes: Personne[];
  selectedpersonne:Personne
  constructor(private cvservice:CvService) { }

  ngOnInit(): void {
    this.personnes= this.cvservice.getpersonnes()
  }
  selectpersonne(personne:any)
  {
    this.selectedpersonne = personne 
  }

}
