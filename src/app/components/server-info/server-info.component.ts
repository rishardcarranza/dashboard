import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.css']
})
export class ServerInfoComponent implements OnInit {
    public qrCodeData: string = '';
    public localIp: string = '';

  constructor(private dataLocal: DataLocalService) {
   }

  ngOnInit() {
    this.getLocalIP();
    this.localIp = localStorage.getItem('LOCAL_IP');
    this.qrCodeData = this.localIp
  }

  async getLocalIP() {
    await this.dataLocal.getLocalIp();
  }

}
