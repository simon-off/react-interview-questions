import { NavLink, Outlet } from "react-router-dom";
import { Binary, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useWindowResize from "../hooks/useWindowResize";
import { challengeRoutes } from "./ChallengeRoutes";

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
      <header ref={headerRef} className="main-header">
        <NavLink to="/">
          <Binary />
          React Interview Questions
        </NavLink>
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
        <aside className={`main-aside ${menuOpen ? "open" : ""}`} style={{ top: headerHeight }}>
          <h2>
            Challenges
            <button onClick={() => setMenuOpen(false)}>
              <X />
            </button>
          </h2>
          <nav className="text-subtle">
            {challengeRoutes.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
                {link.text}
              </NavLink>
            ))}
          </nav>
        </aside>
        <div
          onClick={() => setMenuOpen(false)}
          className={`text-subtle container page-content ${menuOpen ? "open" : ""}`}
        >
          <Outlet />
        </div>
      </main>
    </>
  );
}
