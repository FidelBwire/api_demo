import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './components/notification/notification.component';
import { PipesImplementationComponent } from './components/pipes-implementation/pipes-implementation.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DirectivesImplComponent } from './components/directives-impl/directives-impl.component';
import { HighlightDirective } from './components/directives-impl/highlight.directive';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    PipesImplementationComponent,
    CapitalizePipe,
    DirectivesImplComponent,
    HighlightDirective,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
