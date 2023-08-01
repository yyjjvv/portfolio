// import { useState } from "react";
import { Link } from "react-router-dom";
// import Modal from "./Modal";
import styles from "./List.module.scss";

const List = ({ data }) => {
    // const [isVisible, setisVisible] = useState(false);

    // const handleModalVisibility = () => {
    //     if(isVisible){
    //         document.body.style = `overflow: auto`;
    //     } else {
    //         document.body.style= `overflow: hidden`;
    //     }
    //     setisVisible(prev => !prev);
    // }

    return (
        <Link to={`/list/${data.id}`}>
            <li className={styles["projects__list"]} /*onClick={handleModalVisibility}*/>
                <div className={styles["projects__list--img"]}>
                    <div>{data.description}</div>
                    <img src={data.img} alt={data.title} />
                </div>
                <div className={styles["projects__list--dec"]}>
                    <h3>{data.title}</h3>
                    <span>{data.type}</span>
                </div>
            </li>
            {/* {isVisible && <Modal data={data} closeModal={handleModalVisibility} />} */}
        </Link>
    );
};

export default List;
