import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories/categories.service';
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
  categories: Category[] = [];

  constructor(
    private deviceService: DeviceService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getDevices();
    this.getCategories();
  }

  getDevices(): void {
    this.deviceService.getDevices().subscribe((devices) => {
      this.devices = devices;
    });
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
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

  delete(device: Device): void {
    this.devices = this.devices.filter((d) => d !== device);
    this.deviceService.deleteDevice(device.id).subscribe();
  }
}
