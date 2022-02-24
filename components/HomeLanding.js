import data from "../data/home/home.json";
import styles from "../styles/homelanding.module.scss";

function HomeLanding() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <div className={styles.description}>
          <h1>
            {data.home.title}
            <strong> {data.home.title2}</strong>
            {data.home.title3}
          </h1>
          <p>{data.home.desc}</p>
          <div className={styles.button}>
            <button>{data.home.button.text}</button>
          </div>
        </div>

        <div className={styles.images}>
          <img src="/images/banner.png"></img>
        </div>
      </div>
    </div>
  );
}

export default HomeLanding;
