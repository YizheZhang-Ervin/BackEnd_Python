import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  styles:[`.online {color:'white'}`],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor(){
    this.serverStatus = Math.random()>0.5?'offline':'online';
  }
  getColor(){
    this.serverStatus=='offline'?'red':'green';
  }
  getServerStatus() {
    return this.serverStatus;
  }
}
