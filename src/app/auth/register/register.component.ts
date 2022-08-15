import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(
    public api:ApiService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  user:any = {};
  hide:any = true

 /*  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.minLength(6), Validators.required]) */
 

  loading:any;
  register(){
    this.loading = true;
    this.api.register(this.user.email, this.user.password).subscribe(res => {
      console.log(res)
      console.log(this.user.email, this.user.password)
      this.loading=false;
      this.router.navigate(['/login'])
    }, error=> {
      this.loading=false
      alert('tidak dapat register')
    })
    
  }
}
