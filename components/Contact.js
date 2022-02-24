import styles from "../styles/contact.module.scss";
import data from "../data/data.json";

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactTitle}>
        <hr />
        <h1>{data.contact.title}</h1>
        <p>{data.contact.desc}</p>
      </div>

      <div className={styles.formContainer}>
        <form>
          <input placeholder={data.contact.input.placeholder} />
          <button>{data.contact.button.text}</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
