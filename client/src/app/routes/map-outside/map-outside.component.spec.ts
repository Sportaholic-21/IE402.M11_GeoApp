import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOutsideComponent } from './map-outside.component';

describe('MapOutsideComponent', () => {
  let component: MapOutsideComponent;
  let fixture: ComponentFixture<MapOutsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapOutsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
