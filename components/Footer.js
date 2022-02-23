import styles from "../styles/footer.module.scss";
import data from "../data/data.json";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <img src="/images/logo.png" />
        <hr />
      </div>

      <div className={styles.copyright}>
        <h1>
          {data.footer.text1}
          <strong>{data.footer.text2}</strong>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
