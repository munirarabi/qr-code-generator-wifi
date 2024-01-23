import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsQrGeneratorComponent } from './inputs-qr-generator.component';

describe('InputsQrGeneratorComponent', () => {
  let component: InputsQrGeneratorComponent;
  let fixture: ComponentFixture<InputsQrGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsQrGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputsQrGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
