import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Countdown001Component } from './countdown001.component';

describe('Countdown001Component', () => {
  let component: Countdown001Component;
  let fixture: ComponentFixture<Countdown001Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Countdown001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Countdown001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
