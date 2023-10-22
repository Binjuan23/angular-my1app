import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviandoDatosComponent } from './enviando-datos.component';

describe('EnviandoDatosComponent', () => {
  let component: EnviandoDatosComponent;
  let fixture: ComponentFixture<EnviandoDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviandoDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviandoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
