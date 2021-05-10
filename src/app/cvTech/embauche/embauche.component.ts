import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { EmbaucherService } from 'src/app/services/embaucher.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.scss']
})
export class EmbaucheComponent implements OnInit {
  selectedPersonne:Personne;
  personnes:Personne[]
  constructor(private embaucherservice:EmbaucherService) { }

  ngOnInit(): void {
    this.personnes=this.embaucherservice.getembauchees()
  }
  selectpersonne(personne:Personne)
  {
    this.selectedPersonne=personne
    console.log(personne)
  }
  virer(personne:Personne)
  {
    this.embaucherservice.virer(this.selectedPersonne)
  }
}
