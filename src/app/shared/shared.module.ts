import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

/*
* Module needs for common components.
* This components should not have reference to another module.
* May import UI library.
*/
@NgModule({
  declarations: [],
  imports: [BrowserModule],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
