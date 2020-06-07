import {AiHeaderItem} from "./AiHeaderItem";
import {AiSelectableItem} from "./selectable/AiSelectableItem";

export interface AiHeaderActionItem extends AiSelectableItem {
  id: string;
  name: string;
  icon: string;
  selected: boolean;
  children: AiHeaderItem[];
}
