import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { environment } from 'src/environments/environment';

// Sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { UserListComponent } from './components/user-list/user-list.component';
import { ServerInfoComponent } from './components/server-info/server-info.component';

import { QRCodeModule } from 'angularx-qrcode';


const config: SocketIoConfig = {
  url: environment.wsURL, options: {}
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    UserListComponent,
    ServerInfoComponent
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
