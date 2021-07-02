import { NavPC } from "../styles/components/NavStyle";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import "./classStyle.css";

export default function Navigater() {
  const isPc = useMediaQuery({
    query: "(min-width:781px)",
  });
  const scrollToBest = () => {
    window.scrollTo({ top: 1200, behavior: "smooth" });
  };

  return (
    isPc && (
      <NavPC>
        <ul>
          <li>Home</li>
          <Link to="/" onClick={scrollToBest}>
            <li>BestSeller</li>
          </Link>
          <Link to="/">
            <li>Category</li>
          </Link>
          <Link to="/">
            <li>My library</li>
          </Link>
        </ul>
      </NavPC>
    )
  );
}
