import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiQrGeneratorComponent } from './wifi-qr-generator.component';

describe('WifiQrGeneratorComponent', () => {
  let component: WifiQrGeneratorComponent;
  let fixture: ComponentFixture<WifiQrGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WifiQrGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WifiQrGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
