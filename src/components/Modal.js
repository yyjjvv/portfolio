import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

const Backdrop = ({ closeModal }) => {
    return <div className={styles.backdrop} onClick={() => closeModal()} />;
};

const ModalContents = ({ data, closeModal }) => {
    return (
        <div className={styles.modal}>
            <button
                type="button"
                className={styles["btn__close"]}
                onClick={() => closeModal()}
            >
                <img src="./img/ic-close.svg" alt="icon close" />
            </button>
            <header
                className={styles["modal__header"]}
                style={{
                    backgroundImage: `url(${data.modalImg}), linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
                }}
            >
                <span className={styles["modal__header--type"]}>{data.type}</span>
                <h3 className={styles["modal__header--title"]}>{data.title}</h3>
                <div className={styles["modal__header--date"]}>{data.date}</div>
            </header>
            <section>
                <div dangerouslySetInnerHTML={{ __html: data.bodyHTML }} />
                <p>
                    <span>Platform: </span>
                    {data.platform}
                </p>
                <p>
                    <span>Stack: </span>
                    {data.stack}
                </p>
                <div>
                    <a href={data.url}>website</a>
                    {data.github && <a href={data.github}>Github</a>}
                </div>
            </section>
        </div>
    );
};

const Modal = ({ data, closeModal }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop closeModal={closeModal} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalContents data={data} closeModal={closeModal} />,
                document.getElementById("overlay-root")
            )}
        </>
    );
};

export default Modal;
