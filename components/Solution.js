import styles from "../styles/solution.module.scss";
import data from "../data/solution/solution.json";

function Solution() {
  return (
    <div className={styles.solutionContainer}>
      <div className={styles.solutionTitle}>
        <hr />
        <h1>{data.infos.title}</h1>
        <p>{data.infos.desc}</p>
        {data.infos.infos.map((x) => {
          return (
            <div className={styles.icons} key={x.id}>
              <i className="fas fa-check-circle" />
              <h1>{x.text}</h1>
            </div>
          );
        })}
      </div>

      <div className={styles.images}>
        <img src="images/marketing-img.svg" />
      </div>
    </div>
  );
}

export default Solution;
