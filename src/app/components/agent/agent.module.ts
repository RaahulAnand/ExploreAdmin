import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { AgentSignupComponent } from './agent-signup/agent-signup.component';
import { AgentRoutingModule } from './agent-routing.module';



@NgModule({
  declarations: [AgentLoginComponent, AgentSignupComponent],
  imports: [
    CommonModule,
    SharedModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
