import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongreComponent } from './congre.component';

describe('CongreComponent', () => {
  let component: CongreComponent;
  let fixture: ComponentFixture<CongreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
