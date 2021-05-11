import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { EmbaucherService } from 'src/app/services/embaucher.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.scss']
})
export class DetailCvComponent implements OnInit {
  @Input() personne:Personne
  constructor(private embaucheservice:EmbaucherService, private router:Router) { }

  ngOnInit(): void {
  }
  embaucher()
  {
    this.embaucheservice.embaucher(this.personne)
  }
  moreinfo()
  {
    const link=['cv',this.personne.id]
    this.router.navigate(link)
  }
}
