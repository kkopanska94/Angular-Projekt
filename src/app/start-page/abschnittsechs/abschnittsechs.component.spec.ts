import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbschnittsechsComponent } from './abschnittsechs.component';

describe('AbschnittsechsComponent', () => {
  let component: AbschnittsechsComponent;
  let fixture: ComponentFixture<AbschnittsechsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbschnittsechsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbschnittsechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
