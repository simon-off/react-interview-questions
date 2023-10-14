import CountryCapitalGamePage from "../components/CountryCapitalGame/CountryCapitalGamePage";
import TransferListPage from "../components/TransferList/TransferListPage";

export const challengeRoutes = [
  { to: "/country-capital", text: "Country Capital Game", element: <CountryCapitalGamePage /> },
  { to: "/transfer-list", text: "Transfer List", element: <TransferListPage /> },
];
