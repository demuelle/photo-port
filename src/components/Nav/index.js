import { useEffect } from "react";

import { capitalizeFirstLetter } from "../../utils/helpers.js";

function Nav(props) {
    const { categories, currentCategory, setCurrentCategory } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name)
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">{" "}📸</span>{" "} Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map(cat =>
                            (
                            <li className={`mx-1 ${cat.name === currentCategory.name && 'navActive'}`} key={cat.name}>
                                <span onClick={() => setCurrentCategory(cat)}>{capitalizeFirstLetter(cat.name)}</span>
                            </li>
                            )
                        )
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Nav;