import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkidanjeRacunaComponent } from './ukidanje-racuna.component';

describe('UkidanjeRacunaComponent', () => {
  let component: UkidanjeRacunaComponent;
  let fixture: ComponentFixture<UkidanjeRacunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkidanjeRacunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkidanjeRacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
