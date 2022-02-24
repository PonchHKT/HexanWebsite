import styles from "../styles/footer.module.scss";
import data from "../data/footer/footer.json";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <img src="/images/logo.png" />
        <hr />
      </div>

      <div className={styles.copyright}>
        <h1>
          {data.text1}
          <strong>{data.text2}</strong>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
