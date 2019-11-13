import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.css']
})
export class ServerInfoComponent implements OnInit {
    public qrCodeData = '';
    public localIp = '';

  constructor(private dataLocal: DataLocalService) {
   }

  ngOnInit() {
    // this.localIp = localStorage.getItem('LOCAL_IP');
    // tslint:disable-next-line: max-line-length
    // console.log('entonces?', typeof(this.localIp), this.localIp, (this.localIp !== 'null' && this.localIp !== null && this.localIp !== ''));
    // if (this.localIp !== 'null' && this.localIp !== null && this.localIp !== '') {
    //   this.qrCodeData = this.localIp;
    // } else {
    this.dataLocal.getServerInfo()
      .then((server) => {
        // console.log(server);
        this.localIp = server[0].ipaddr;
        this.qrCodeData = this.localIp;
        localStorage.setItem('LOCAL_IP',  this.localIp);
      });
    // }
  }

}
