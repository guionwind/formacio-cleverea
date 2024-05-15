import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template: `<h3>un dos tres</h3>`,
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server created"
  serverName = '';
  serverCreated = false
  servers = ['server1', 'server2']

  constructor() {
    this.allowNewServer = true;
    // setTimeout(() => this.allowNewServer = true, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = "Server created with name " + this.serverName
    this.servers.push(this.serverName)
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value
    //if necessary, use type casting: (<HTMLInputElement>event.target).value
  }
}