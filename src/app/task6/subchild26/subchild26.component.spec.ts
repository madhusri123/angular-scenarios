import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subchild26Component } from './subchild26.component';

describe('Subchild26Component', () => {
  let component: Subchild26Component;
  let fixture: ComponentFixture<Subchild26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subchild26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subchild26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
