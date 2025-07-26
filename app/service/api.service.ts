import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  private api_url:any = 'http://universities.hipolabs.com/search?country=India';
  /**initialize the university lists */
  getAllUniversityLists(){
    return this.http.get(`${this.api_url}`)
  }
}
