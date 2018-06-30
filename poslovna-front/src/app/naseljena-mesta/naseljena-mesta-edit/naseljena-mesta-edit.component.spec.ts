import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaseljenaMestaEditComponent } from './naseljena-mesta-edit.component';

describe('NaseljenaMestaEditComponent', () => {
  let component: NaseljenaMestaEditComponent;
  let fixture: ComponentFixture<NaseljenaMestaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaseljenaMestaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaseljenaMestaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
