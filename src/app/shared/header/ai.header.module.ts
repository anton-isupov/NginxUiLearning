import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {AiHeaderComponent} from "./ai.header.component";


@NgModule({
  declarations: [AiHeaderComponent],
  exports: [
    AiHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AiHeaderModule { }
