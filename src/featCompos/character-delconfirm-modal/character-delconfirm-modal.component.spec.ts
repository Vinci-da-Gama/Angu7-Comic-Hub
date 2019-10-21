import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDelconfirmModalComponent } from './character-delconfirm-modal.component';

describe('CharacterDelconfirmModalComponent', () => {
  let component: CharacterDelconfirmModalComponent;
  let fixture: ComponentFixture<CharacterDelconfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDelconfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDelconfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
