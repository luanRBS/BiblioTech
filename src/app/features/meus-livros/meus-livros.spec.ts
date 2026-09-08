import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusLivrosComponent } from './meus-livros';

describe('MeusLivrosComponent', () => {
  let component: MeusLivrosComponent;
  let fixture: ComponentFixture<MeusLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeusLivrosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MeusLivrosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
