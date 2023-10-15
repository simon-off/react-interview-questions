import FoldingSection from "../FoldingSection";
import DirectoryTree from "./DirectoryTree";

export default function DirectoryTreePage() {
  return (
    <article>
      <h1>Directory Tree</h1>
      <FoldingSection heading={<h2>Inspiration</h2>}>
        <div className="directory-tree-inspiration">
          <p>
            This interview question comes from another great video by <b>Web Dev Cody</b>:{" "}
            <a href="https://youtu.be/ixgxx_um8r8" target="_blank">
              Solving a practical intermediate react interview challenge
            </a>
          </p>
          <p>
            Building a directory tree in React is a great challenge because it not only teaches you
            React skills, but also how to think about tree data structures in general. Chances are
            that you'll come across some scenario in your programming journey where you need to
            implement some sort of tree structure. Whether that be for the navigation on a blog or a
            full fledged file explorer, it's a good thing to practice!
          </p>
        </div>
      </FoldingSection>
      <FoldingSection heading={<h2>Instructions</h2>}>
        <div className="directory-tree-instructions">
          <p>
            In this coding challenge, you will create a directory tree structure using React. The
            goal is to build a component that can display a hierarchical representation of
            directories and files, similar to what you see in a typical file explorer.
          </p>
          <ol className="list-gap">
            <li>Create a React component called DirectoryTree.</li>
            <li>
              Create an object representing the directory tree.{" "}
              <ul>
                <li>
                  It should be a nested object with directories containing files and
                  sub-directories.
                </li>
                <li>You only need to store the names of the files, no actual file content.</li>
              </ul>
            </li>
            <li>Implement a feature to expand/collapse directories when clicked.</li>
            <li>Apply basic CSS styling to make it visually presentable.</li>
          </ol>
        </div>
      </FoldingSection>
      <FoldingSection heading={<h2>Implementation</h2>}>
        <p>
          Here's a demo of my solution. You can also check out the{" "}
          <a
            href="https://github.com/simon-off/react-interview-questions/tree/main/src/components/DirectoryTree"
            target="_blank"
          >
            code on GitHub
          </a>{" "}
          if you're curious!
        </p>
        <DirectoryTree />
      </FoldingSection>
    </article>
  );
}
