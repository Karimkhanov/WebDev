import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Company} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(
      `${this.BASE_URL}/api/companies/`
    )
  }

  createCompany(name: string, description: string, city: string, address: string) : Observable<Company> {
    return this.http.post<Company>(
      `${this.BASE_URL}/api/companies/`,
      {name, description, city, address}

    )
  }


  









}
