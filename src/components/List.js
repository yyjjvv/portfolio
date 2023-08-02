import { Link } from "react-router-dom";
import styles from "./List.module.scss";

const List = ({ data }) => {

    return (
        <li className={styles["projects__list"]} style={{backgroundColor:`${data.color}`}}>
            <Link to={`/list/${data.id}`}>
                <div className={styles["projects__list--img"]}>
                    <div>{data.description}</div>
                    <img src={data.img} alt={data.title} />
                </div>
                <div className={styles["projects__list--dec"]}>
                    <h3>{data.title}</h3>
                    <span>{data.type}</span>
                </div>
            </Link>
        </li>
    );
};

export default List;
