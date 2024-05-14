import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    //styleUrl: './server.component.css'
    styles: [`h4 {color: green;}`, `h3 { color: purple; }`]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline";

    getServerStatus() {
        return this.serverStatus;
    }
}