import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { AlbumlistComponent } from './component/albumlist/albumlist.component';
import { PhotolistComponent } from './component/photolist/photolist.component';
import { HttpService } from './services/http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AlbumlistComponent,
    PhotolistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
