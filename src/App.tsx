import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/main.scss";
import "@fontsource-variable/sofia-sans";
import "@fontsource-variable/sofia-sans/wght-italic.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { challengeRoutes } from "./components/ChallengeRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {challengeRoutes.map((route) => (
            <Route key={route.to} path={route.to} element={route.element} />
          ))}
          <Route path="*" element={<h1>Nothing to see here...</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
