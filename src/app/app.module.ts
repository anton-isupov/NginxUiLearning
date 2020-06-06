import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import {CoreModule} from "./core/core.module";
import {FeatureModule} from "./feature/feature.module";
import {SharedModule} from "./shared/shared.module";
import {StoreModule} from "./store/store.module";
import {WelcomeModule} from "./feature/welcome/welcome.module";
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./feature/welcome/welcome.component";
import {AuthGuardService} from "./core/auth/auth.guard.service";
import {ErrorComponent} from "./feature/error/error.component";

const routes: Routes = [
  { path: "", component: WelcomeComponent, canActivate: [AuthGuardService] },
  { path: "**", component: ErrorComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CoreModule,
    FeatureModule,
    SharedModule,
    StoreModule,
    WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
