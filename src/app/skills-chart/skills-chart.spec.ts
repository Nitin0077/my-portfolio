import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsChart } from './skills-chart';

describe('SkillsChart', () => {
  let component: SkillsChart;
  let fixture: ComponentFixture<SkillsChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
