import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BASIC } from 'src/app/app.constant';
import { Login } from '../../models/login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   baseUrl = BASIC;

  constructor(private http : HttpClient) { }

  getLoginDetails(userName:string,passWord:string)
  {
    const params = this.getLoginPara(userName,passWord);
    return this.http.get<Login[]>(`${this.baseUrl}/login/data`,{params})
  }

  getLoginPara(userName:string,passWord:string)
  {
    let params=new HttpParams();
     if (userName != null || userName !== undefined) {
        params = params.set("userName", userName);
     }
     if (passWord != null || passWord !== undefined) {
        params = params.set("passWord", passWord);
     }
    
     return params;
  }
}
