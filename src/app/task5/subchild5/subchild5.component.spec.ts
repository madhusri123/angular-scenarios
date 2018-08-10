import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subchild5Component } from './subchild5.component';

describe('Subchild5Component', () => {
  let component: Subchild5Component;
  let fixture: ComponentFixture<Subchild5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subchild5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subchild5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
