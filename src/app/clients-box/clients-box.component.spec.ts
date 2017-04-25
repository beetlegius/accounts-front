import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsBoxComponent } from './clients-box.component';

describe('ClientsBoxComponent', () => {
  let component: ClientsBoxComponent;
  let fixture: ComponentFixture<ClientsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
