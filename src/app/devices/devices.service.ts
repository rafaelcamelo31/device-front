import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device } from '../devices/device';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private devicesUrl = 'http://localhost:3000/devices';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getDevices(): Observable<Device[]> {
    return this.http
      .get<Device[]>(this.devicesUrl)
      .pipe(catchError(this.handleError<Device[]>([])));
  }

  getDevice(id: number): Observable<Device> {
    return this.http
      .get<Device>(this.devicesUrl + `/${id}`)
      .pipe(catchError(this.handleError<Device>()));
  }

  addDevice(device: Device): Observable<Device> {
    const savedPost = this.http.post<Device>(
      this.devicesUrl,
      device,
      this.httpOptions
    );
    location.reload();
    return savedPost;
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
