import CountryCapitalGamePage from "./CountryCapitalGame/CountryCapitalGamePage";
import DirectoryTreePage from "./DirectoryTree/DirectoryTreePage";
import TransferListPage from "./TransferList/TransferListPage";

export const challengeRoutes = [
  { to: "/country-capital", text: "Country Capital Game", element: <CountryCapitalGamePage /> },
  { to: "/directory-tree", text: "Directory Tree", element: <DirectoryTreePage /> },
  { to: "/transfer-list", text: "Transfer List", element: <TransferListPage /> },
];
