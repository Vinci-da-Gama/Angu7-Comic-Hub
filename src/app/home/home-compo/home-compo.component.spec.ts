import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompo } from './home-compo.component';

describe('HomeCompo', () => {
  let component: HomeCompo;
  let fixture: ComponentFixture<HomeCompo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCompo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCompo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
