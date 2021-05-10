import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rsimulator',
  templateUrl: './rsimulator.component.html',
  styleUrls: ['./rsimulator.component.scss']
})
export class RsimulatorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotocomponent(route)
  {
    const link=[route];
    this.router.navigate(link);
  }
}
