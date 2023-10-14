import FoldingSection from "../FoldingSection";
import TransferList from "./TransferList";

export default function TransferListPage() {
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
            made by <b>Web Dev Interviews</b>. A great video in which the author manages to solve
            the challenge in just under 30 minutes.
          </p>
        </div>
      </FoldingSection>
      <FoldingSection heading={<h2>Instructions</h2>}>
        <div className="transfer-list-instructions">
          <p>
            Welcome to the META React JS interview. Your task is to build a transfer list component.
            A transfer list allows users to pass items from one list to another. UX has provided a
            simple <span>mock up:</span>
          </p>
          <div className="columns">
            <img src="/images/challenges/transfer-list.png" alt="" />
            <ol>
              <li>
                The transfer list should consists of two lists with directional actions buttons.
              </li>
              <li>
                The user should be able to select one or multiple items and move the item to the
                other list by clicking the action buttons.
              </li>
            </ol>
          </div>
        </div>
      </FoldingSection>
      <FoldingSection heading={<h2>Implementation</h2>}>
        <p>
          My solution differs from <b>Web Dev Interviews</b> version in a number of ways, most
          significantly in how I handle the state of the list items. I chose to only use one array
          of items and let each keep track of it's own <code>label</code>, <code>location</code> and
          whether or not it's currently <code>checked</code>. I may also have taken some liberties
          with the styling, can't help myself!
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
        <TransferList />
      </FoldingSection>
    </article>
  );
}
