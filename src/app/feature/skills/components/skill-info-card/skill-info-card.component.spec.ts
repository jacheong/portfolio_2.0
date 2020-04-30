import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillInfoCardComponent } from './skill-info-card.component';

describe('SkillInfoCardComponent', () => {
  let component: SkillInfoCardComponent;
  let fixture: ComponentFixture<SkillInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
