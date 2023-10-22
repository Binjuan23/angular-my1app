import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesComponent } from './quienes.component';

describe('QuienesComponentComponent', () => {
  let component: QuienesComponent;
  let fixture: ComponentFixture<QuienesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
