import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuneraillesComponent } from './funerailles.component';

describe('FuneraillesComponent', () => {
  let component: FuneraillesComponent;
  let fixture: ComponentFixture<FuneraillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuneraillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuneraillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
