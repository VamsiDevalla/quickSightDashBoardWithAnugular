import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  constructor(private http: HttpClient) { }

  getEmbeddedUrl() {
    return this.http.get('http://localhost:8080/api/getEmbeddedURL');
  }
}
