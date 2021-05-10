import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.scss']
})
export class ItemCvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() personne : Personne
  @Output() selectedpersonne = new EventEmitter()
  selectpersonne()
  {
    this.selectedpersonne.emit(this.personne)
  }
}
