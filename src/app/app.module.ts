import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Animations from Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Http module for fetch
import { HttpClientModule } from '@angular/common/http';

// Routing because "who knows", but this will be commented because it's not needed
//import { AppRoutingModule } from './app-routing.module';

// Main app component
import { AppComponent } from './app.component';

// Components
import { GraphComponent } from './components/graphcomponent/graph.component';
import { SelectorComponent } from './components/selectorcomponent/selector.component';

// Fetch data service
import { FetchService } from './services/fetch.service';

// Materials modules
import { MatSelectModule } from '@angular/material/select';

// ng2-chart library
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ChartsModule
    // Here is commented to the routing module
    //AppRoutingModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
