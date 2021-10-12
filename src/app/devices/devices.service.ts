import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device } from '../devices/device';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private devicesUrl = 'https://device-back.herokuapp.com/devices';

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

    return savedPost;
  }

  deleteDevice(id: number): Observable<Device> {
    return this.http
      .delete<Device>(this.devicesUrl + `/${id}`)
      .pipe(catchError(this.handleError<Device>()));
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
