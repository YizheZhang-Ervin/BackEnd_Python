import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { LoginformComponent } from './loginform/loginform.component';
import { Button001Component } from './button001/button001.component';
import { Navbar001Component } from './navbar001/navbar001.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { Navbar002Component } from './navbar002/navbar002.component';
import { Paging001Component } from './paging001/paging001.component';
import { Stepbar001Component } from './stepbar001/stepbar001.component';
import { Slider001Component } from './slider001/slider001.component';
import { Switch001Component } from './switch001/switch001.component';
import { Transfer001Component } from './transfer001/transfer001.component';
import { Timeline001Component } from './timeline001/timeline001.component';
import { Countdown001Component } from './countdown001/countdown001.component';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    CommonModule,
    IconsProviderModule
  ],
  declarations: [WelcomeComponent, LoginformComponent, Button001Component, Navbar001Component, Navbar002Component, Paging001Component, Stepbar001Component, Slider001Component, Switch001Component, Transfer001Component, Timeline001Component, Countdown001Component],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
