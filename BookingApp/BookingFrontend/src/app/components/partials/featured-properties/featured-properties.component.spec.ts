import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPropertiesComponent } from './featured-properties.component';

describe('FeaturedPropertiesComponent', () => {
  let component: FeaturedPropertiesComponent;
  let fixture: ComponentFixture<FeaturedPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
