import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisaoComponent } from './previsao.component';

describe('PrevisaoComponent', () => {
  let component: PrevisaoComponent;
  let fixture: ComponentFixture<PrevisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevisaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
