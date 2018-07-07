import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentiListComponent } from './klijenti-list.component';

describe('KlijentiListComponent', () => {
  let component: KlijentiListComponent;
  let fixture: ComponentFixture<KlijentiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlijentiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlijentiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
