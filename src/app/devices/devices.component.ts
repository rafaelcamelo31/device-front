import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from '../categories/category';
import { Device } from './device';
import { DeviceService } from './devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  devices: Device[] = [];

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void {
    this.deviceService.getDevices().subscribe((devices) => {
      this.devices = devices;
    });
  }

  add(color: string, partNumber: string, category: Category | string) {
    if (!color || !partNumber || !category) return;

    this.deviceService
      .addDevice({ color, partNumber, category } as Device)
      .subscribe((device) => {
        this.devices.push(device);
      });
  }
}
