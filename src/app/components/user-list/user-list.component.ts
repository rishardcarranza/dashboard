import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Observable } from 'rxjs';
import { WebsocketService } from '../../services/websocket.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // usuariosActivos: Observable<any>;

  constructor(
    public dashboardService: DashboardService,
    public webSocketService: WebsocketService
    ) { }

  ngOnInit() {
    // this.usuariosActivos = this.dashboardService.getUsuariosActivos();
  }

}
