import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {menuIdxSlice} from '../../store/menuIdxSlice';
import { all, work, project } from "../../store/filterSlice";
import styles from "./Filter.module.scss";

const Filter = ({ onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const menuIdx = useSelector((state) => {
        // console.log(state.idx.value);
        return state.idx.value;
    });

    const closeBtnHandler = () => {
        onClose();
    };

    return (
        <div className={styles["filter"]}>
            <button
                type="button"
                className={styles["filter__close"]}
                onClick={closeBtnHandler}
            >
                <img src="/img/ic-close.svg" alt="icon close" />
            </button>
            <section className={styles["filter__category"]}>
                <h2 className={styles["filter__category--title"]}>Filter</h2>
                <div className={styles["filter__category--name"]}>
                    <h3
                        className={menuIdx === 0 ? styles["active"] : ""}
                        onClick={() => {
                            // dispatch({ type: "filterSlice/all" });
                            // dispatch(filterSlice.actions.all());
                            dispatch(all());
                            dispatch(menuIdxSlice.actions.idx(0));
                            navigate('/');
                        }}
                    >
                        all
                    </h3>
                    <h3
                        className={menuIdx === 1 ? styles["active"] : ""}
                        onClick={() => {
                            // dispatch({ type: "filterSlice/work", filter: "work" });
                            // dispatch(filterSlice.actions.work('work'));
                            dispatch(work("work"));
                            dispatch(menuIdxSlice.actions.idx(1));
                            navigate('/');
                        }}
                    >
                        works
                    </h3>
                    <h3
                        className={menuIdx === 2 ? styles["active"] : ""}
                        onClick={() => {
                            // dispatch({ type: "filterSlice/project", filter: "project" });
                            // dispatch(filterSlice.actions.project('project'));
                            dispatch(project("project"));
                            dispatch(menuIdxSlice.actions.idx(2));
                            navigate('/');
                        }}
                    >
                        projects
                    </h3>
                </div>
            </section>
        </div>
    );
};

export default Filter;
