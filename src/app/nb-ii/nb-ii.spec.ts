import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NbII } from './nb-ii';

describe('NbII', () => {
  let component: NbII;
  let fixture: ComponentFixture<NbII>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NbII],
    }).compileComponents();

    fixture = TestBed.createComponent(NbII);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
