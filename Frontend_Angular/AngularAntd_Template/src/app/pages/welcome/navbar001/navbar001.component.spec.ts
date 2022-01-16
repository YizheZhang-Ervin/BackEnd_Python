import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbar001Component } from './navbar001.component';

describe('Navbar001Component', () => {
  let component: Navbar001Component;
  let fixture: ComponentFixture<Navbar001Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Navbar001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbar001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
