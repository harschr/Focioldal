import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Vidi } from './vidi';

describe('Vidi', () => {
  let component: Vidi;
  let fixture: ComponentFixture<Vidi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vidi],
    }).compileComponents();

    fixture = TestBed.createComponent(Vidi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
