import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucherService {
  personnes: Personne[]
  constructor() 
    {
      this.personnes=[]
    }

  getembauchees()
  {
    return this.personnes
  }
  embaucher(personne:Personne)
  {
    const index=this.personnes.indexOf(personne)
    if (index <0)
    {
      this.personnes.push(personne)
    }
    else
    {
      alert("personne deja embauchee")
    }

  }

  virer(personne:Personne)
  {
    const index=this.personnes.indexOf(personne)
    if (index>=0)
    {
      this.personnes.splice(index,1)
    }
    else
    {
      alert(`${personne.name} ne peut pas etre viree lorsqu elle deja embauchee`)
    }
  }
}
