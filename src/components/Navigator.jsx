import { NavPC } from "../styles/components/NavStyle";
import { useMediaQuery } from "react-responsive";
import "./classStyle.css";
export default function Navigater() {
  const isPc = useMediaQuery({
    query: "(min-width:781px)",
  });

  return (
    isPc && (
      <NavPC>
        <ul>
          <li>Home</li>
          <li>BestSeller</li>
          <li>Category</li>
          <li>My library</li>
        </ul>
      </NavPC>
    )
  );
}
