import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/main.scss";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { challengeRoutes } from "./data/challengeRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {challengeRoutes.map((route) => (
            <Route path={route.to} element={route.element} />
          ))}
          <Route path="*" element={<h1>Nothing to see here...</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
