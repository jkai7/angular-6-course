import { Component } from '@angular/core'; // import the @Component

@Component({ // shows the type of decorator in typescript
  selector: 'app-server', // nameing our selector for the component
  templateUrl: './server.component.html'// relative path to our html template
})
export class ServerComponent { // createing and exporting the class of our server component
  serverId = 10; // can be resolved to a string
  serverStatus = 'offline'; // is a string

  getServerStatus() {
    return this.serverStatus; // resolves to a string
  }
}
