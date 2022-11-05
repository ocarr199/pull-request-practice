import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BranchComponent } from './branch/branch.component';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    BranchComponent,
    RootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
