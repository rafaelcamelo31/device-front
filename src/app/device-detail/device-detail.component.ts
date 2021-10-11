import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../devices/device';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css'],
})
export class DeviceDetailComponent implements OnInit {
  @Input()
  device?: Device;

  constructor() {}

  ngOnInit(): void {}
}
