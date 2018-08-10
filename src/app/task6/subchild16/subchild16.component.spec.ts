import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subchild16Component } from './subchild16.component';

describe('Subchild16Component', () => {
  let component: Subchild16Component;
  let fixture: ComponentFixture<Subchild16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subchild16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subchild16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
