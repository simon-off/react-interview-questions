import { Item } from "./TransferList";

type ListItemProps = {
  item: Item;
  handleCheck: (item: Item, checked: boolean) => void;
};

export default function ListItem({ item, handleCheck }: ListItemProps) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          onChange={(e) => handleCheck(item, e.target.checked)}
          checked={item.checked}
        />
        {item.label}
      </label>
    </li>
  );
}
