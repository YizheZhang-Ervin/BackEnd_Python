import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Slider001Component } from './slider001.component';

describe('Slider001Component', () => {
  let component: Slider001Component;
  let fixture: ComponentFixture<Slider001Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Slider001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slider001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
