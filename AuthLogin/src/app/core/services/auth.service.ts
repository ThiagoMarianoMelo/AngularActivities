import { Injectable } from '@angular/core';
import { signModel } from '../Model/signModel';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url : string  = "http://localhost:3000";

  constructor(private httpClient : HttpClient,
              private router : Router) { }


  public sign(req : signModel) : Observable<any>{
    return this.httpClient.post<{token: string}>(`${this.url}/sign`, req).pipe( 
      map( (res) =>{
        localStorage.removeItem('acesstoken');
        var token = JSON.stringify(res.token);
        localStorage.setItem('acessToken', token.replaceAll('"',''));
        return this.router.navigate(['admin'])
      }),
      catchError( (err) =>{
        return throwError( () => err);
      })
    );
  }
}
