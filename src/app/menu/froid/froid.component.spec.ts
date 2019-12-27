import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FroidComponent } from './froid.component';

describe('FroidComponent', () => {
  let component: FroidComponent;
  let fixture: ComponentFixture<FroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
