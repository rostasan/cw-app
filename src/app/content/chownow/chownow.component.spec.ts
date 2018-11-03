import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChownowComponent } from './chownow.component';

describe('ChownowComponent', () => {
  let component: ChownowComponent;
  let fixture: ComponentFixture<ChownowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChownowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChownowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
