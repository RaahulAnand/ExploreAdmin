import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDestiantionComponent } from './add-destiantion.component';

describe('AddDestiantionComponent', () => {
  let component: AddDestiantionComponent;
  let fixture: ComponentFixture<AddDestiantionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDestiantionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDestiantionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
