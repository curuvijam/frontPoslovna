import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KursValutiComponent } from './kurs-valuti.component';

describe('KursValutiComponent', () => {
  let component: KursValutiComponent;
  let fixture: ComponentFixture<KursValutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KursValutiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KursValutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
