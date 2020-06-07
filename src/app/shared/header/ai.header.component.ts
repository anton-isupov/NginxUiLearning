import {Component, Input, OnInit} from "@angular/core";
import {AiHeaderItem} from "./models/items/AiHeaderItem";
import {AiHeaderActionItem} from "./models/items/AiHeaderActionItem";
import {AiSelectableItem} from "./models/items/selectable/AiSelectableItem";

@Component({
  selector: "c-header",
  templateUrl: "./ai.header.component.html",
  styleUrls: ["./ai.header.component.scss"]
})
export class AiHeaderComponent implements OnInit {

  burgerMenuVisibility = false;

  @Input("items")
  menuItems: AiHeaderItem[] = [];

  @Input("actionItems")
  actionItems: AiHeaderActionItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addEvents = (event: MouseEvent, actionItem: AiSelectableItem, allItems: AiSelectableItem[]) => {
    actionItem.selected = !actionItem.selected;
    allItems.filter((i: AiHeaderActionItem) => i.id !== actionItem.id).forEach( (i: AiHeaderActionItem) => {
      i.selected = false;
    });
  }

  openBurgerMenu = (event: MouseEvent) => {
    this.burgerMenuVisibility = !this.burgerMenuVisibility;
  }

}
