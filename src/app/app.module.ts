import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { NgOptimizedImage } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsComponent } from './components/components.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports     : [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent}
    ]),
    ComponentsComponent,
    CheckboxModule,
    ButtonModule,
    RippleModule,
    CheckboxModule,
    NgOptimizedImage,
    InputTextModule,
    MegaMenuModule,
    MenuModule
  ],
  providers   : [
    {provide: 'route', useValue: ActivatedRoute}
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
