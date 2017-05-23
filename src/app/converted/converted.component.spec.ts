import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertedComponent } from './converted.component';

describe('ConvertedComponent', () => {
  let component: ConvertedComponent;
  let fixture: ComponentFixture<ConvertedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
