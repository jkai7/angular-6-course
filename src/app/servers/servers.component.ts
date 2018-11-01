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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
