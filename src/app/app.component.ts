import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { WifiQrGeneratorComponent } from './wifi-qr-generator/wifi-qr-generator.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    WifiQrGeneratorComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gerador-qrcode';

  BoolInputsComponent: boolean = true;
  BoolWifiComponent: boolean = false;

  LoginWifi: string = '';
  PasswordWifi: string = '';

  UpdateLoginWifi(event: Event): void {
    this.LoginWifi = (event.target as HTMLInputElement).value;
  }

  UpdatePasswordWifi(event: Event): void {
    this.PasswordWifi = (event.target as HTMLInputElement).value;
  }

  GenerateQrCodeWifi() {
    if (!this.LoginWifi.trim() || !this.PasswordWifi.trim()) {
      console.log('Dados não preenchidos');
      return;
    }

    this.ShowInputsComponent();
  }

  ShowInputsComponent() {
    this.BoolInputsComponent = !this.BoolInputsComponent;
  }

  ShowButton() {
    this.BoolWifiComponent = !this.BoolWifiComponent;
  }
}
