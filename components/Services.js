import styles from "../styles/services.module.scss";
import data from "../data/services/services.json";

function Services() {
  return (
    <div className={styles.serviceContainer}>
      <div className={styles.serviceTitle}>
        <hr />
        <h1>{data.services.title}</h1>
        <p>{data.services.desc}</p>
      </div>

      <div className={styles.boxContainer}>
        {data.services.cards.map((x) => {
          return (
            <div className={styles.boxContent} key={x.id}>
              <img src={`/images/${x.icon}`} />
              <h1>{x.title}</h1>
              <p>{x.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
