import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAddingComponent } from './simple-adding.component';

describe('SimpleAddingComponent', () => {
  let component: SimpleAddingComponent;
  let fixture: ComponentFixture<SimpleAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleAddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
