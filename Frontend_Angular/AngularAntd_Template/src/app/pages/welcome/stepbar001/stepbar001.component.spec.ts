import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Stepbar001Component } from './stepbar001.component';

describe('Stepbar001Component', () => {
  let component: Stepbar001Component;
  let fixture: ComponentFixture<Stepbar001Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Stepbar001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stepbar001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
