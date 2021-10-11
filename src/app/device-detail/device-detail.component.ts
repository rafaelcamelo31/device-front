import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../devices/device';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DeviceService } from '../devices/devices.service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css'],
})
export class DeviceDetailComponent implements OnInit {
  @Input()
  device?: Device;

  constructor(
    private route: ActivatedRoute,
    private devicesService: DeviceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.devicesService.getDevice(id).subscribe((device) => {
      this.device = device;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
