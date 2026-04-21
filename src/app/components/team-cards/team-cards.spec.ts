import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCards } from './team-cards';

describe('TeamCards', () => {
  let component: TeamCards;
  let fixture: ComponentFixture<TeamCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamCards],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
