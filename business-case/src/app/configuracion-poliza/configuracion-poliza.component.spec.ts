import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionPolizaComponent } from './configuracion-poliza.component';

describe('ConfiguracionPolizaComponent', () => {
  let component: ConfiguracionPolizaComponent;
  let fixture: ComponentFixture<ConfiguracionPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracionPolizaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfiguracionPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
