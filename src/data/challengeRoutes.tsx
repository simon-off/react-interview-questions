import CountryCapitalGame from "../components/CountryCapitalGame/CountryCapitalGame";
import TransferList from "../components/TransferList/TransferList";

export const challengeRoutes = [
  { to: "/country-capital", text: "Country Capital Game", element: <CountryCapitalGame /> },
  { to: "/transfer-list", text: "Transfer List", element: <TransferList /> },
];
