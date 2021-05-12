import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  visibility=false;
  constructor() { }

  ngOnInit(): void {
  }
  show()
  {
    this.visibility=!this.visibility
  }

}
