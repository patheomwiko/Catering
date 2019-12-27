import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaudComponent } from './chaud.component';

describe('ChaudComponent', () => {
  let component: ChaudComponent;
  let fixture: ComponentFixture<ChaudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
