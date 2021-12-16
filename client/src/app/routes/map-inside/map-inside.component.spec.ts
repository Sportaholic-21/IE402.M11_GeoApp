import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapInsideComponent } from './map-inside.component';

describe('MapInsideComponent', () => {
  let component: MapInsideComponent;
  let fixture: ComponentFixture<MapInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapInsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
