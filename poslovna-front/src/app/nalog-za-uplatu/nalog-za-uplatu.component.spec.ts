import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NalogZaUplatuComponent } from './nalog-za-uplatu.component';

describe('NalogZaUplatuComponent', () => {
  let component: NalogZaUplatuComponent;
  let fixture: ComponentFixture<NalogZaUplatuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NalogZaUplatuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NalogZaUplatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
