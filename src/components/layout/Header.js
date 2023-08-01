import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { menuIdxSlice } from "../../store/menuIdxSlice";
import { all } from "../../store/filterSlice";
import About from "./About";
import Filter from "./Filter";
import styles from "./Header.module.scss";

const Header = () => {
    const dispatch = useDispatch();
    const [openAbout, setOpenAbout] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);

    const openAboutHandler = () => {
        setOpenAbout(true);
        setOpenFilter(false);
        document.body.style.overflow = "hidden";
    };

    const openFilterHandler = () => {
        setOpenFilter(true);
        setOpenAbout(false);
        document.body.style.overflow = "hidden";
    };

    const closeMenuHandler = () => {
        if (openFilter) {
            setOpenFilter(false);
        } else if (openAbout) {
            setOpenAbout(false);
        }
        document.body.style.overflow = "auto";
    };

    const aboutActive = {
        backgroundColor: openAbout ? "#eee5d7" : "#f8f5f1",
    };
    const filterActive = {
        backgroundColor: openFilter ? "#eee5d7" : "#f8f5f1",
    };

    return (
        <header id={styles["header"]}>
            <ul>
                <li>
                    <h1 className={styles.logo}>
                        <span className="hidden">LOGO</span>
                        {/* <a href="/">yyjjvv</a> */}
                        <Link
                            to="/"
                            onClick={() => {
                                closeMenuHandler();
                                dispatch(all());
                                dispatch(menuIdxSlice.actions.idx(0));
                            }}
                        >
                            yyjjvv
                        </Link>
                    </h1>
                </li>
                <li className={styles["action-btn"]} style={aboutActive}>
                    <button
                        type="button"
                        className={styles["action-btn__about"]}
                        onClick={openAboutHandler}
                    >
                        About
                    </button>
                </li>
                <li className={styles["action-btn"]} style={filterActive}>
                    <button
                        type="button"
                        className={styles["action-btn__filter"]}
                        onClick={openFilterHandler}
                    >
                        Filter
                    </button>
                    <button
                        type="button"
                        className={styles["action-btn__language"]}
                        style={
                            openFilter
                                ? { display: "none" }
                                : { display: "block" }
                        }
                    >
                        KO
                    </button>
                </li>
            </ul>
            {openAbout && <About onClose={closeMenuHandler} />}
            {openFilter && <Filter onClose={closeMenuHandler} />}
        </header>
    );
};

export default Header;
