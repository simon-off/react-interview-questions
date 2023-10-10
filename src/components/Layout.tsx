import { Link, Outlet } from "react-router-dom";
import { Binary, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useWindowResize from "../hooks/useWindowResize";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useWindowResize(() => {
    if (window.innerWidth > 1000) {
      setMenuOpen(false);
    } else {
      setHeaderHeight(headerRef?.current?.offsetHeight ?? 0);
    }
  }, true);

  // Used to set (position: "fixed") on body when burger menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }
  }, [menuOpen]);

  return (
    <>
      <header ref={headerRef}>
        <Link to="/">
          <Binary />
          React Interview Questions
        </Link>
        <div>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu />
          </button>
          <span>
            coded by{" "}
            <a target="_blank" href="https://simonoff.se">
              simonoff
            </a>
          </span>
        </div>
      </header>
      <main>
        <aside className={menuOpen ? "open" : ""} style={{ top: headerHeight }}>
          <h2>
            Questions
            <button onClick={() => setMenuOpen(false)}>
              <X />
            </button>
          </h2>
          <nav>
            <Link to="/">Transfer List</Link>
            <Link to="/blogs">Country Game</Link>
            <Link to="/blogs">blogs</Link>
            <Link to="/blogs">LAST</Link>
          </nav>
        </aside>
        <div
          onClick={() => setMenuOpen(false)}
          className={`container page-content ${menuOpen ? "open" : ""}`}
        >
          <Outlet />
        </div>
      </main>
    </>
  );
}
