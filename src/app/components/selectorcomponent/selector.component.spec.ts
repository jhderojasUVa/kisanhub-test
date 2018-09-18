import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorcomponentComponent } from './selectorcomponent.component';

describe('SelectorcomponentComponent', () => {
  let component: SelectorcomponentComponent;
  let fixture: ComponentFixture<SelectorcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
