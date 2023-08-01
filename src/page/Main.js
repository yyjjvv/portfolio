import { useSelector } from "react-redux";
import List from "../components/List";
import styles from "./Main.module.scss";

const Main = () => {
    const filteredData = useSelector((state) => {
        // console.log(state.filter.value);
        return state.filter.value;
    });
    return (
        <main id={styles["main"]}>
            <ul className={styles.projects}>
                {filteredData.map((list) => (
                    <List key={list.id} data={list} />
                ))}
            </ul>
        </main>
    );
};

export default Main;
