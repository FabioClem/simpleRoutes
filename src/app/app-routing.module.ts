import { NgModule } from "@angular/core";

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { TemplateComponent } from "./pages/template/template.component";

const routes: Routes = [
    // { path: 'entrar', component: LoginComponent },

    { path: ':infos', component: TemplateComponent },
    { path: '', component: TemplateComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }