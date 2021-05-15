import Image from "next/image";
import React from "react";

export function Header(): JSX.Element {
  const [isMenuActive, setIsMenuActive] = React.useState(false);

  return (
    <header>
      <div className="container mx-auto p-5">
        <nav className="flex justify-between">
          <div>
            <a href="#">
              <Image src="/logo.svg" width="100%" height={74} />
            </a>
          </div>
          <div>
            <button
              className="md:hidden bg-purple"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              MENU
            </button>
            <ul className="hidden md:flex md:flex-row">
              <li className="pr-5">
                <a> Shop </a>
              </li>
              <li className="pr-5">
                <a>crates</a>
              </li>
              <li className="pr-5">
                <a>art crew</a>
              </li>
              <li>
                <a>about us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
