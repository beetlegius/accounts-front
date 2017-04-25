import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementsBoxComponent } from './movements-box.component';

describe('MovementsBoxComponent', () => {
  let component: MovementsBoxComponent;
  let fixture: ComponentFixture<MovementsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
