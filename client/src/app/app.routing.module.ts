import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";

const routs: Routes = [
  {path: 'login', component: LoginPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routs)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
