import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmviewComponent } from './filmview.component';

describe('FilmviewComponent', () => {
  let component: FilmviewComponent;
  let fixture: ComponentFixture<FilmviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
