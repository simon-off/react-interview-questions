import { File, FolderClosed, FolderOpen } from "lucide-react";
import { TreeNode, directoryTreeContent } from "./DirectoryTreeContent";
import { useState } from "react";

type NodeProps = {
  node: TreeNode;
  path: string;
  setPathString: React.Dispatch<React.SetStateAction<string>>;
};

function DirectoryTreeNode({ node, path, setPathString }: NodeProps) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setPathString(path);
    node.children && setExpanded(!expanded);
  };

  return (
    <li onClick={handleClick}>
      <button>
        {node.children ? expanded ? <FolderOpen /> : <FolderClosed /> : <File />}
        {node.name}
      </button>
      {node.children && expanded && (
        <ul>
          {node.children.map((nextNode) => (
            <DirectoryTreeNode
              key={nextNode.name}
              node={nextNode}
              path={`${path}/${nextNode.name}`}
              setPathString={setPathString}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function DirectoryTree() {
  const [pathString, setPathString] = useState("/");

  return (
    <div className="directory-tree-implementation">
      <p>{pathString}</p>
      <ul onClick={() => setPathString("/")}>
        {directoryTreeContent.map((node) => (
          <DirectoryTreeNode
            key={node.name}
            node={node}
            path={`/${node.name}`}
            setPathString={setPathString}
          />
        ))}
      </ul>
    </div>
  );
}
