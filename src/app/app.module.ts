// modules above component declarations
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // import the type of decorator, which in this case, is ng module
import { FormsModule } from '@angular/forms';

// components below module declarations
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; // must import any declerations from other components

@NgModule({ // Ng model is the decorator in ts
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent // declaring our servers.component.ts so it is recognized by angular
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]// hear we refrence our app component (main.ts), therefore, closing the angular circle
})
export class AppModule { }
