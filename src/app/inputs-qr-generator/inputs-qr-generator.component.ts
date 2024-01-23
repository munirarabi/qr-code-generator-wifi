import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';  

@Component({
  selector: 'app-inputs-qr-generator',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './inputs-qr-generator.component.html',
  styleUrl: './inputs-qr-generator.component.css'
})
export class InputsQrGeneratorComponent  {
  loginWifi: string = '';
  passwordWifi: string = '';
}
