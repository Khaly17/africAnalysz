import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentExperimentsComponent } from './recent-experiments.component';

describe('RecentExperimentsComponent', () => {
  let component: RecentExperimentsComponent;
  let fixture: ComponentFixture<RecentExperimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentExperimentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
