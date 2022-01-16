import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Timeline001Component } from './timeline001.component';

describe('Timeline001Component', () => {
  let component: Timeline001Component;
  let fixture: ComponentFixture<Timeline001Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Timeline001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Timeline001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
