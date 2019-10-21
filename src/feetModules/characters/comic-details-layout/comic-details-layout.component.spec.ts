import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicDetailsLayoutComponent } from './comic-details-layout.component';

describe('ComicDetailsLayoutComponent', () => {
  let component: ComicDetailsLayoutComponent;
  let fixture: ComponentFixture<ComicDetailsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicDetailsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
