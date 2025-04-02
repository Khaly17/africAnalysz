import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnprofileAttackComponent } from './unprofile-attack.component';

describe('UnprofileAttackComponent', () => {
  let component: UnprofileAttackComponent;
  let fixture: ComponentFixture<UnprofileAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnprofileAttackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnprofileAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
