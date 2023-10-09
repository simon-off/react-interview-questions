import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/main.scss";
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<>Blog</>} />
          <Route path="*" element={<h1>Nothing to see here...</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
