import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.scss']
})
export class AddCvComponent implements OnInit {

  constructor(private cvservice:CvService,private router:Router) { }

  ngOnInit(): void {
  }
  envoyercv(x)
  {
    const link=['cv']
    this.cvservice.addpersonne(x.value);
    this.router.navigate(link)
  }

}
