import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyassignedComponent } from './myassigned.component';

describe('MyassignedComponent', () => {
  let component: MyassignedComponent;
  let fixture: ComponentFixture<MyassignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyassignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyassignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
