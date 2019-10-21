import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterWithFormComponent } from './character-with-form.component';

describe('CharacterWithFormComponent', () => {
  let component: CharacterWithFormComponent;
  let fixture: ComponentFixture<CharacterWithFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterWithFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterWithFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
