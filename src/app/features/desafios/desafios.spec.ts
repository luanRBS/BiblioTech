import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafiosComponent } from './Desafios';

describe('DesafiosComponent', () => {
  let component: DesafiosComponent;
  let fixture: ComponentFixture<DesafiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesafiosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DesafiosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
