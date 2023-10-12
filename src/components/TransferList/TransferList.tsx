import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ListItem from "./ListItem";
import FoldingSection from "../FoldingSection";

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
      <FoldingSection heading={<h2>Inspiration</h2>}>
        <div className="transfer-list-inspiration">
          <p>
            I found this interview question via the YouTube video:{" "}
            <a href="https://youtu.be/w0Kvt65Z2Uk" target="_blank">
              Would you pass this React.js interview question at META?
            </a>{" "}
            made by <b>Web Dev Interviews</b>. A great video in which the author
            manages to solve the challenge in just under 30 minutes.
          </p>
        </div>
      </FoldingSection>
      <FoldingSection heading={<h2>Instructions</h2>}>
        <div className="transfer-list-instructions">
          <p>
            Welcome to the META React JS interview. Your task is to build a
            transfer list component. A transfer list allows users to pass items
            from one list to another. UX has provided a simple{" "}
            <span>mock up:</span>
          </p>
          <div className="columns">
            <img src="/images/challenges/transfer-list.png" alt="" />
            <ol>
              <li>
                The transfer list should consists of two lists with directional
                actions buttons.
              </li>
              <li>
                The user should be able to select one or multiple items and move
                the item to the other list by clicking the action buttons.
              </li>
            </ol>
          </div>
        </div>
      </FoldingSection>

      <FoldingSection heading={<h2>Implementation</h2>}>
        <p>
          My solution differs from <b>Web Dev Interviews</b> version in a number
          of ways, most significantly in how I handle the state of the list
          items. I chose to only use one array of items and let each keep track
          of it's own <code>label</code>, <code>location</code> and whether or
          not it's currently <code>checked</code>. I may also have taken some
          liberties with the styling, can't help myself!
        </p>
        <p>
          Here's a demo of my solution. You can also check out the{" "}
          <a
            href="https://github.com/simon-off/react-interview-questions/tree/main/src/components/TransferList"
            target="_blank"
          >
            code on GitHub
          </a>{" "}
          if you're curious!
        </p>
        <div className="transfer-list-challenge">
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
              <button onClick={() => handleTransferButtonClick("RIGHT")}>
                <ChevronRight />
              </button>
              <button onClick={() => handleTransferButtonClick("LEFT")}>
                <ChevronLeft />
              </button>
            </div>
          </div>
        </div>
      </FoldingSection>
    </article>
  );
}
