import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { AgentSignupComponent } from './agent-signup/agent-signup.component';

const routes: Routes = [
    {
        path: 'Login',
        component: AgentLoginComponent,
    }, {
        path: 'Signup',
        component: AgentSignupComponent,
    },
    {
        path: '',
        redirectTo: 'Signup',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgentRoutingModule { }
