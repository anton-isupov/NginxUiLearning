import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ErrorComponent } from './error/error.component';

/*
* Module exports services. Create module for each independent function or module.
*/
@NgModule({
  declarations: [ErrorComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class FeatureModule { }
