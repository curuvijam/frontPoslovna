import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuteEditComponent } from './valute-edit.component';

describe('ValuteEditComponent', () => {
  let component: ValuteEditComponent;
  let fixture: ComponentFixture<ValuteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
