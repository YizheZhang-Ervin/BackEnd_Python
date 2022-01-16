import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Transfer001Component } from './transfer001.component';

describe('Transfer001Component', () => {
  let component: Transfer001Component;
  let fixture: ComponentFixture<Transfer001Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Transfer001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Transfer001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
