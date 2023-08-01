import styles from './Footer.module.scss'
const Footer = () => {
    return (
        <footer id={styles['footer']}>
            <p>
                This site is for personal portfolio purposes and not for
                commercial use.
            </p>
            <p>Copyright &copy; Jiwon Yoo. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
