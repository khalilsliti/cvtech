import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsimulatorComponent } from './rsimulator.component';

describe('RsimulatorComponent', () => {
  let component: RsimulatorComponent;
  let fixture: ComponentFixture<RsimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsimulatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
