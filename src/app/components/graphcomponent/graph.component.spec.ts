import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphcomponentComponent } from './graphcomponent.component';

describe('GraphcomponentComponent', () => {
  let component: GraphcomponentComponent;
  let fixture: ComponentFixture<GraphcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
