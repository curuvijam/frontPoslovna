import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacunLicaComponent } from './racun-lica.component';

describe('RacunLicaComponent', () => {
  let component: RacunLicaComponent;
  let fixture: ComponentFixture<RacunLicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacunLicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacunLicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
