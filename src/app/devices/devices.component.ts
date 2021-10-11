import { Component, OnInit } from '@angular/core';
import { Device } from './device';
import { DeviceService } from './devices.service';
import { Observable, of } from 'rxjs';
import { DEVICES } from './mock-devices';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  devices: Device[] = [];
  selectedDevice?: Device;

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  onSelect(device: Device): void {
    this.selectedDevice = device;
  }

  getDevices(): void {
    this.deviceService.getDevices().subscribe((devices) => {
      this.devices = devices;
    });
  }
}
