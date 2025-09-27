import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTimeline } from './project-timeline';

describe('ProjectTimeline', () => {
  let component: ProjectTimeline;
  let fixture: ComponentFixture<ProjectTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTimeline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTimeline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
