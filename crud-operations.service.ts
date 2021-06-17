import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CRUD_OPERATIONS } from 'src/app/app.constant';
import { Employee } from '../../models/crud/Employee';

@Injectable({
  providedIn: 'root'
})
export class CrudOperationsService {

  constructor(private http: HttpClient) { }

  public baseUrl = CRUD_OPERATIONS;

  getData()
  {
    return this.http.get<any[]>(`${this.baseUrl}/crud/get-data`);
  }

  insertEmpDetails( employee : Employee )
  {
    console.log("In srvice:--",employee);
     return this.http.post<Employee>(`${this.baseUrl}/crud/insert-data`,employee);
  }

  deleteById(empId : number)
  {
    let params=new HttpParams();

    params=params.set("empId",empId.toString());
    console.log('before passing param is:',params);
    return this.http.delete<any>(`${this.baseUrl}/crud/delete-by-id`, {params});
  } 

}
