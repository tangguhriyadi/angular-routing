import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public api:ApiService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.checkLogin()
  }

  checkLogin(){
    this.api.get('bookswithauth/status').subscribe(res=> {
      return
    }, err=>{
      this.router.navigate(['/login'])
    })
  }
  logout(){
    let conf = confirm('keluar app?')
    if(conf){
      localStorage.removeItem('appToken')
      window.location.reload();
    }
  }

}
