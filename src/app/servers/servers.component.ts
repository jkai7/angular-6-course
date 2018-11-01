import { Component, OnInit } from '@angular/core';

@Component({ // must have a template or templateUrl
  // selector: '[app-servers]' - makes div attribute
  // selector: '.app-servers' - makes class attribute
  selector: 'app-servers', // placing [...] or .- - - around the selector makes it an atribute. in the html <div <app-servers></div>

  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,  template instead of templateURL (external file) if you have 3 lines or less of html code
  templateUrl: './servers.component.html',

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server has been created';
  serverName = 'Enter Server Name';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }// END constructor

  ngOnInit() {
  }// END ngOnInit

  onCreateServer() {
    this.serverCreationStatus = `${this.serverName} Server was created`;
  }// END onCreateServer

  onDeleteServer() {
    this.serverCreationStatus = `${this.serverName} Server has been deleted`;
    this.serverName = 'Enter Server Name';
  }// END onCreateServer

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }// END onUpdateServerName

}// END ServersComponent
