import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SginupComponent } from './sginup.component';

describe('SginupComponent', () => {
  let component: SginupComponent;
  let fixture: ComponentFixture<SginupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SginupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SginupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
