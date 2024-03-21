import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getData<T>(path: string): Observable<T> {
    return this.http.get<T>(path);
  }

  public postData<T, V = unknown>(path: string, body: V): Observable<T> {
    return this.http.post<T>(path, body);
  }

  public putData<T, V = unknown>(path: string, body: V): Observable<T> {
    return this.http.put<T>(path, body);
  }

  public patchData<T, V = unknown>(path: string, body: V): Observable<T> {
    return this.http.patch<T>(path, body);
  }

  public deleteData<T>(path: string): Observable<T> {
    return this.http.delete<T>(path);
  }
}
