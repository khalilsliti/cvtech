import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { EmbaucherService } from 'src/app/services/embaucher.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.scss']
})
export class DetailCvComponent implements OnInit {
  @Input() personne:Personne
  constructor(private embaucheservice:EmbaucherService) { }

  ngOnInit(): void {
  }
  embaucher()
  {
    this.embaucheservice.embaucher(this.personne)
  }
}
