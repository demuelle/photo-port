import { useEffect } from "react";

import { capitalizeFirstLetter } from "../../utils/helpers.js";

function Nav(props) {
  const {
    categories,
    currentCategory,
    setCurrentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)} >Contact</span>
          </li>
          {categories.map((cat) => (
            <li
              className={`mx-1 ${
                cat.name === currentCategory.name && !contactSelected && "navActive"
              }`}
              key={cat.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(cat);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(cat.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
