import { Link, Outlet } from "react-router-dom";
import { Binary, Menu } from "lucide-react";

export default function Layout() {
  return (
    <>
      <header>
        <Link to="/">
          <Binary />
          React Interview Questions
        </Link>
        <div>
          <button>
            <Menu />
          </button>
          <p>
            coded by{" "}
            <a target="_blank" href="https://simonoff.se">
              simonoff
            </a>
          </p>
        </div>
      </header>
      <main>
        <aside>
          <h2>Pages</h2>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/blogs">blogs</Link>
            <Link to="/blogs">blogs</Link>
          </nav>
        </aside>

        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}
