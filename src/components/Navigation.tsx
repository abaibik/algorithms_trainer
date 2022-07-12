import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link className="nav__link__home" to="/" data-text="&nbsp;Home">
            &nbsp;Home&nbsp;
          </Link>
        </li>
        <li>
          <Link
            className="nav__link__arrays"
            to="/arrays"
            data-text="&nbsp;Arrays"
          >
            &nbsp;Arrays&nbsp;
          </Link>
        </li>
        <li>
          <Link
            className="nav__link__strings"
            to="/strings"
            data-text="&nbsp;Strings"
          >
            &nbsp;Strings&nbsp;
          </Link>
        </li>
      </ul>
    </div>
  );
};
