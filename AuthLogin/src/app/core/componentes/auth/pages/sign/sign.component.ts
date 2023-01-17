import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit{

  constructor(private formBuilder : FormBuilder,
              private authService : AuthService){
  }

  public formAuth : FormGroup = this.formBuilder.group({
    email: [ '', [Validators.required]],
    senha: [ '', [Validators.required]]
  });


  public msgError : string = "";


  public submitForm(){
    if(this.formAuth.invalid) return;
    var loginInfo = {
      email: this.formAuth.value.email,
      senha: this.formAuth.value.senha
    }
    this.authService.sign(loginInfo).subscribe({
      next : (res) => {
        this.msgError = "";
        return res
      },
      error : (err) => this.msgError = err.error.message
    });
  }

  ngOnInit(){

  }

}
