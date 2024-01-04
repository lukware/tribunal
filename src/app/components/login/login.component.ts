import { Component, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ServiceAuthService } from '../../service/service-auth-service';
import { JWT } from '../../model/JWT';
import { LoginRequest } from '../../service/loginRequest';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule, HomeComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
    userLoginOn: boolean = false;

    Jwt = JWT;
    loginForm= new FormGroup ({
    user: new FormControl ('',Validators.required),
    pass: new FormControl ('',Validators.required),
  })

  constructor(private service: ServiceAuthService){}

    FormUserSubmit(): void {
    //console.log(this.loginForm.get("user")?.value);

    if(this.loginForm.valid){   
      this.service.getJwt(this.loginForm.value as LoginRequest).subscribe(
        (result) => {          
          console.log(result[0].jwt);
          this.userLoginOn = true;          
        },
        (error) => {
          console.error('Error fetching search results', error);
        }        
      );


        /*this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.info("Login completo");
          this.router.navigateByUrl('/inicio');
          this.loginForm.reset();
        }
      })*/
    }
  }
}