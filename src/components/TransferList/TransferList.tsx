import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ListItem from "./ListItem";

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

  const handleButtonClick = (moveTo: Location) => {
    setItems(
      items.map((item) =>
        item.checked
          ? {
              ...item,
              location: moveTo,
              checked:
                item.location !== moveTo && uncheckOnMove
                  ? false
                  : item.checked,
            }
          : item
      )
    );
  };

  const handleCheck = (checkedItem: Item, checked: boolean) => {
    checkedItem.checked = checked;
    setItems(
      items.map((item) =>
        item.label === checkedItem.label ? checkedItem : item
      )
    );
  };

  return (
    <article>
      <h1>Transfer List</h1>

      <section className="transfer-list">
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
                  <ListItem key={i} item={item} handleCheck={handleCheck} />
                )
            )}
          </ul>
          <ul>
            {items.map(
              (item, i) =>
                item.location === "RIGHT" && (
                  <ListItem key={i} item={item} handleCheck={handleCheck} />
                )
            )}
          </ul>
          <div>
            <button onClick={() => handleButtonClick("RIGHT")}>
              <ChevronRight />
            </button>
            <button onClick={() => handleButtonClick("LEFT")}>
              <ChevronLeft />
            </button>
          </div>
        </div>
      </section>
    </article>
  );
}
