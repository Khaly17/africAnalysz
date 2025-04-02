import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContremeasureComponent } from './contremeasure.component';

describe('ContremeasureComponent', () => {
  let component: ContremeasureComponent;
  let fixture: ComponentFixture<ContremeasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContremeasureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContremeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
