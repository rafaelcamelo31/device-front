import { Component, OnInit } from '@angular/core';
import { Device } from './device';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  device: Device = {
    id: 1,
    color: 'blue',
    partNumber: '55467',
    categoryId: 1,
  };

  constructor() {}

  ngOnInit(): void {}
}
