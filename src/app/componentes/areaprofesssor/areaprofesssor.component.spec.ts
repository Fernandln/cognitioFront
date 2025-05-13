import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaprofesssorComponent } from './areaprofesssor.component';

describe('AreaprofesssorComponent', () => {
  let component: AreaprofesssorComponent;
  let fixture: ComponentFixture<AreaprofesssorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaprofesssorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaprofesssorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
