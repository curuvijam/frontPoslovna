import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacuniEditComponent } from './racuni-edit.component';

describe('RacuniEditComponent', () => {
  let component: RacuniEditComponent;
  let fixture: ComponentFixture<RacuniEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacuniEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacuniEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
