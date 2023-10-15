export type TreeNode = {
  name: string;
  children?: TreeNode[];
};

export const directoryTreeContent: TreeNode[] = [
  {
    name: "pictures",
    children: [
      {
        name: "cute-animals",
        children: [{ name: "cat.jpg" }, { name: "dog.jpg" }, { name: "fish.jpg" }],
      },
      {
        name: "friends",
        children: [{ name: "bob.jpg" }, { name: "jane.jpg" }, { name: "joe.jpg" }],
      },
      { name: "self-portrait.png" },
    ],
  },
  {
    name: "documents",
    children: [
      {
        name: "work-stuff",
        children: [
          {
            name: "invoices",
            children: [
              { name: "invoice-1542.pdf" },
              { name: "invoice-1876.pdf" },
              { name: "invoice-4585.pdf" },
            ],
          },
          { name: "code-of-conduct.md" },
        ],
      },
      { name: "important-notes.md" },
    ],
  },
  {
    name: "videos",
    children: [
      {
        name: "animals",
        children: [{ name: "funny-cat.mp4" }, { name: "funny-dog.mp4" }, { name: "cute-seal.mp4" }],
      },
      { name: "party.mp4" },
      { name: "music-video.mp4" },
    ],
  },
  { name: "README.md" },
];
