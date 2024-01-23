import { Component } from '@angular/core';
import QRCode from 'qrcode-generator';

@Component({
  selector: 'app-wifi-qr-generator',
  standalone: true,
  imports: [],
  templateUrl: './wifi-qr-generator.component.html',
  styleUrl: './wifi-qr-generator.component.css',
})
export class WifiQrGeneratorComponent {

  wifiInfo = {
    ssid: 'NET_5GC122FB',
    password: 'ECC122FB',
    encryption: 'WPA', // ou 'WEP' ou 'nopass'
  };

  qrCodeData: string = '';

  generateWifiQrCode(): void {
    const wifiString = `WIFI:T:${this.wifiInfo.encryption};S:${this.wifiInfo.ssid};P:${this.wifiInfo.password};;`;
    const typeNumber = 0;
    const errorCorrectionLevel = 'L';
    const qr = QRCode(typeNumber, errorCorrectionLevel);

    qr.addData(wifiString);
    qr.make();

    this.qrCodeData = qr.createDataURL(10, 0);
  }
}
