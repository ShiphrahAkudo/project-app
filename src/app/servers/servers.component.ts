import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  //template: `
  //<app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'No server was created';
serverName = 'Testserver';
serverCreated = false;
  constructor() { 
    setTimeout(
      ()=>{
this.allowNewServer = true;
      },5000
    )
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server created ';
  }

}
