import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CambiopwdComponent } from './components/cambiopwd/cambiopwd.component';
import { UpanelComponent } from './components/cambiopwd/upanel/upanel.component';
import { PwdcambioComponent } from './components/cambiopwd/pwdcambio/pwdcambio.component';
import { ListComponent } from './components/cambiopwd/list/list.component';
import { BuscarComponent } from './components/cambiopwd/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    CambiopwdComponent,
    UpanelComponent,
    PwdcambioComponent,
    ListComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
