import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device } from '../devices/device';
import { DEVICES } from '../devices/mock-devices';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor() {}

  getDevices(): Observable<Device[]> {
    const devices = of(DEVICES);
    return devices;
  }
}
