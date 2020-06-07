import {AiSelectableItem} from "./selectable/AiSelectableItem";

export interface AiHeaderItem extends AiSelectableItem {
  id: string;
  name: string;
  selected: boolean;
  icon?: string;
  href?: string;
}
