import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  constructor(private http: HttpClient) { } 
  
  private API_NOSOTROS='http://localhost:3000/administrativo' 

  //MÉTODO GET 
  getNosotros(): Observable <any>{ 
    return this.http.get(this.API_NOSOTROS) 
  } 

  //MÉTODO POST 
  postNosotros(user: any): Observable<any>{ 
    return this.http.post(this.API_NOSOTROS, user) 
  } 

  //MÉTODO PUT 
  putNosotros(user: any, id:number): Observable<any>{ 
    this.API_NOSOTROS=`${this.API_NOSOTROS}/${id}` 
    return this.http.put(this.API_NOSOTROS, user) 
  } 

  //MÉTODO DELETE 
  deleteNosotros(id:number) : Observable <any>{ 
    this.API_NOSOTROS =`${this.API_NOSOTROS}/${id}` 
    return this.http.delete(this.API_NOSOTROS) 
  } 

}
