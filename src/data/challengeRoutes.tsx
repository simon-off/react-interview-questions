import CountryGame from "../components/CountryGame/CountryGame";
import TransferList from "../components/TransferList/TransferList";

export const challengeRoutes = [
  { to: "/country-capital", text: "Country Capital", element: <CountryGame /> },
  { to: "/transfer-list", text: "Transfer List", element: <TransferList /> },
];
