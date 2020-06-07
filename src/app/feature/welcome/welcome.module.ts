import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WelcomeComponent } from "./welcome.component";
import {AiHeaderModule} from "../../shared/header/ai.header.module";



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  exports: [
    WelcomeComponent
  ],
    imports: [
        CommonModule,
        AiHeaderModule
    ]
})
export class WelcomeModule { }
