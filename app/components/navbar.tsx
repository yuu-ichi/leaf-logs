import { useState, useCallback } from "react";
import { useLocation, Location } from "@remix-run/react";

const LIST = [
  { toPath: "/", name: "Home" },
  { toPath: "/about", name: "About" },
] as const;

const Navbar = () => {
  const [oppend, setOpen] = useState<boolean>(false);
  const clickedMenu = useCallback(() => {
    setOpen(!oppend);
  }, [oppend, setOpen]);

  const location = useLocation();
  return (
    <nav className="sticky top-0 z-50 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="container max-w-4xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Leaf Logs
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          onClick={clickedMenu}
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
        >
          <span className="sr-only">menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <NavList oppend={oppend} location={location} />
      </div>
    </nav>
  );
};

type NavListProps = {
  oppend: boolean;
  location: Location;
};

const NavList = (props: NavListProps) => {
  const active =
    "block py-2 px-3 text-white bg-cyan-600 rounded dark:bg-cyan-700";
  const nonActive =
    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  return (
    <>
      {props.oppend && (
        <div className="w-full">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            {LIST.map((l) => (
              <li>
                <a
                  href={l.toPath}
                  className={
                    props.location.pathname === l.toPath ? active : nonActive
                  }
                  aria-current="page"
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
