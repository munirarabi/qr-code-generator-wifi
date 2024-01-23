import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { WifiQrGeneratorComponent } from './wifi-qr-generator/wifi-qr-generator.component';
import { InputsQrGeneratorComponent } from './inputs-qr-generator/inputs-qr-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WifiQrGeneratorComponent, InputsQrGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-qrcode';
}
