import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Button001Component } from './button001.component';

describe('Button001Component', () => {
  let component: Button001Component;
  let fixture: ComponentFixture<Button001Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Button001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Button001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
