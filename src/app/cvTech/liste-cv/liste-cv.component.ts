import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.scss']
})
export class ListeCvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() personnes : Personne []
  @Output() selectedpersonne = new EventEmitter()
  selectpersonne(personne:any)
  {
    this.selectedpersonne.emit(personne)
   
  }
}
