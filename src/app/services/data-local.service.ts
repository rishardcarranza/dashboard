import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


// declare global {
//     interface Window {
//       RTCPeerConnection: RTCPeerConnection;
//       mozRTCPeerConnection: RTCPeerConnection;
//       webkitRTCPeerConnection: RTCPeerConnection;
//     }
// }


@Injectable({
  providedIn: 'root'
})

export class DataLocalService {

    // private ipRegex = new RegExp(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/);
    // private localIp = '';

  constructor(private http: HttpClient) { }

  getServerInfo() {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: `Token ${environment.token}`
      })
    };

    console.log(`${environment.apiURL}/api/v1/server-info/`, environment.token);

    return this.http.post(`${environment.apiURL}/api/v1/server-info/`, {}, httpOptions).toPromise();
  }

  // getLocalIp() {
  //   window.RTCPeerConnection = this.getRTCPeerConnection();

  //   const pc = new RTCPeerConnection({ iceServers: [] });
  //   pc.createDataChannel('');
  //   pc.createOffer().then(pc.setLocalDescription.bind(pc));

  //   pc.onicecandidate = (ice) => {
  //     this.zone.run(() => {
  //       if (!ice || !ice.candidate || !ice.candidate.candidate) {
  //         return;
  //       }
  //       console.log(ice.candidate.candidate);
  //       this.localIp = this.ipRegex.exec(ice.candidate.candidate)[1];
  //       console.log('LOCAL_IP: ', this.localIp);
  //       localStorage.setItem('LOCAL_IP',  this.localIp);

  //       pc.onicecandidate = () => {};
  //       pc.close();
  //     });
  //   };
  // }

  // private getRTCPeerConnection() {
  //   return window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  // }

}
