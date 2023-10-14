import { Item } from "./TransferList";

type TransferListItemProps = {
  item: Item;
  handleCheck: (item: Item, checked: boolean) => void;
};

export default function TransferListItem({ item, handleCheck }: TransferListItemProps) {
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
