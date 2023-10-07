import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvaskitComponent } from './canvaskit.component';

describe('CanvaskitComponent', () => {
  let component: CanvaskitComponent;
  let fixture: ComponentFixture<CanvaskitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvaskitComponent]
    });
    fixture = TestBed.createComponent(CanvaskitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
