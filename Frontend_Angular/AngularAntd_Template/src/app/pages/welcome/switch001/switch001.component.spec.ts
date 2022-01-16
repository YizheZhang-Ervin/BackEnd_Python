import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Switch001Component } from './switch001.component';

describe('Switch001Component', () => {
  let component: Switch001Component;
  let fixture: ComponentFixture<Switch001Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Switch001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switch001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
