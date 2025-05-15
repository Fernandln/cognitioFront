import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAlunoCompraComponent } from './area-aluno-compra.component';

describe('AreaAlunoCompraComponent', () => {
  let component: AreaAlunoCompraComponent;
  let fixture: ComponentFixture<AreaAlunoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaAlunoCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaAlunoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
