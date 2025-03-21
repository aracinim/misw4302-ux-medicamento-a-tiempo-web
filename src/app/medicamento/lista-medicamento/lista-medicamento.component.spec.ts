import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMedicamentoComponent } from './lista-medicamento.component';

describe('ListaMedicamentoComponent', () => {
  let component: ListaMedicamentoComponent;
  let fixture: ComponentFixture<ListaMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaMedicamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
