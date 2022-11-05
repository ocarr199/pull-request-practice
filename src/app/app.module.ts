import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BranchComponent } from './branch/branch.component';
import { TrunkComponent } from './trunk/trunk.component';
import { BetterbranchComponent } from './betterbranch/betterbranch.component';

@NgModule({
  declarations: [
    AppComponent,
    BranchComponent,
    TrunkComponent,
    BetterbranchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
