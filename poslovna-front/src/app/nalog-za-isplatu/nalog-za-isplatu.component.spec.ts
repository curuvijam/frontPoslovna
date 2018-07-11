import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NalogZaIsplatuComponent } from './nalog-za-isplatu.component';

describe('NalogZaIsplatuComponent', () => {
  let component: NalogZaIsplatuComponent;
  let fixture: ComponentFixture<NalogZaIsplatuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NalogZaIsplatuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NalogZaIsplatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
