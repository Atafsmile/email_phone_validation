import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoeListComponent } from './phoe-list.component';

describe('PhoeListComponent', () => {
  let component: PhoeListComponent;
  let fixture: ComponentFixture<PhoeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
