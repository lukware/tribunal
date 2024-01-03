import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
//import { AuthenticationComponent } from '../authentication/authentication.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm= new FormGroup ({
    user: new FormControl ('',Validators.required),
    pass: new FormControl ('',Validators.required),
  })

  FormUserSubmit(): void {
    console.log(this.loginForm.value);


  }
}