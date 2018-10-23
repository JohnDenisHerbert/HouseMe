import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyPagePage } from './property-page.page';

describe('PropertyPagePage', () => {
  let component: PropertyPagePage;
  let fixture: ComponentFixture<PropertyPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
