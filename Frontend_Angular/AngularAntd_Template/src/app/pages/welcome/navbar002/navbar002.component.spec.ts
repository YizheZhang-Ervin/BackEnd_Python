import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbar002Component } from './navbar002.component';

describe('Navbar002Component', () => {
  let component: Navbar002Component;
  let fixture: ComponentFixture<Navbar002Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Navbar002Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbar002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
