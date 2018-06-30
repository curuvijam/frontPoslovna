import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrzaveEditComponent } from './drzave-edit.component';

describe('DrzaveEditComponent', () => {
  let component: DrzaveEditComponent;
  let fixture: ComponentFixture<DrzaveEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrzaveEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrzaveEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
