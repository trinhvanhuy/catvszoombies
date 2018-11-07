import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppEffects } from './store/effects/app.effects';
import { Catffects } from '@effects/cat.effects';
import { CatService } from '@services/cat.service';
import { ZombieService } from '@services/zombie.service';
import {HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects, Catffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [CatService, ZombieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
