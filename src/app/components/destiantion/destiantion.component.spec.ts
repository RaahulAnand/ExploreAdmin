import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestiantionComponent } from './destiantion.component';

describe('DestiantionComponent', () => {
  let component: DestiantionComponent;
  let fixture: ComponentFixture<DestiantionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestiantionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestiantionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
