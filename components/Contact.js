import styles from "../styles/contact.module.scss";
import data from "../data/contact/contact.json";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactTitle}>
        <hr />
        <h1>{data.title}</h1>
        <p>{data.desc}</p>
      </div>

      <div className={styles.formContainer}>
        <form>
          <input placeholder={data.input.placeholder} />
          <button>{data.button.text}</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
