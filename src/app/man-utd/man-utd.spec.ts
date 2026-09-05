import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManUtd } from './man-utd';

describe('ManUtd', () => {
  let component: ManUtd;
  let fixture: ComponentFixture<ManUtd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManUtd],
    }).compileComponents();

    fixture = TestBed.createComponent(ManUtd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
