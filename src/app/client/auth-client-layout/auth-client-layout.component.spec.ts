import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthClientLayoutComponent } from './auth-client-layout.component';

describe('AuthClientLayoutComponent', () => {
  let component: AuthClientLayoutComponent;
  let fixture: ComponentFixture<AuthClientLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthClientLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthClientLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
