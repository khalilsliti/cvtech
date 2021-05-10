import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherparentComponent } from './anotherparent.component';

describe('AnotherparentComponent', () => {
  let component: AnotherparentComponent;
  let fixture: ComponentFixture<AnotherparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
