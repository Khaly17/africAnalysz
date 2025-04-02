import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAttackComponent } from './profile-attack.component';

describe('ProfileAttackComponent', () => {
  let component: ProfileAttackComponent;
  let fixture: ComponentFixture<ProfileAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileAttackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
