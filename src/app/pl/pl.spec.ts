import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PL } from './pl';

describe('PL', () => {
  let component: PL;
  let fixture: ComponentFixture<PL>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PL],
    }).compileComponents();

    fixture = TestBed.createComponent(PL);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
