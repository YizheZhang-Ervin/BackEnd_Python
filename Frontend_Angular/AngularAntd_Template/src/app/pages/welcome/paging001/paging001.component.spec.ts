import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Paging001Component } from './paging001.component';

describe('Paging001Component', () => {
  let component: Paging001Component;
  let fixture: ComponentFixture<Paging001Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Paging001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paging001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
