import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import TransferListItem from "./TransferListItem";

type Location = "LEFT" | "RIGHT";
export type Item = {
  label: number;
  checked: boolean;
  location: Location;
};

const defaultItems = new Array(4).fill(null).map((_, i): Item => {
  return { label: i, checked: false, location: "LEFT" };
});

export default function TransferList() {
  const [items, setItems] = useState<Item[]>(defaultItems);
  const [uncheckOnMove, setUncheckOnMove] = useState(false);

  const handleTransferButtonClick = (moveTo: Location) => {
    setItems(
      items.map((item) =>
        item.checked
          ? {
              ...item,
              location: moveTo,
              checked: item.location !== moveTo && uncheckOnMove ? false : item.checked,
            }
          : item
      )
    );
  };

  const handleCheck = (checkedItem: Item, checked: boolean) => {
    checkedItem.checked = checked;
    setItems(items.map((item) => (item.label === checkedItem.label ? checkedItem : item)));
  };

  return (
    <div className="transfer-list-implementation">
      <div className="settings">
        <label htmlFor="uncheck-on-move-toggle">Uncheck on transfer</label>
        <div>
          <span>{uncheckOnMove ? "on" : "off"}</span>
          <label className="switch">
            <input
              id="uncheck-on-move-toggle"
              type="checkbox"
              checked={uncheckOnMove}
              onChange={(e) => setUncheckOnMove(e.target.checked)}
            />
            <span className="slider round" />
          </label>
        </div>
      </div>
      <div className="game">
        <ul>
          {items.map(
            (item, i) =>
              item.location === "LEFT" && (
                <TransferListItem key={i} item={item} handleCheck={handleCheck} />
              )
          )}
        </ul>
        <ul>
          {items.map(
            (item, i) =>
              item.location === "RIGHT" && (
                <TransferListItem key={i} item={item} handleCheck={handleCheck} />
              )
          )}
        </ul>
        <div>
          <button onClick={() => handleTransferButtonClick("LEFT")}>
            <ChevronLeft />
          </button>
          <button onClick={() => handleTransferButtonClick("RIGHT")}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
