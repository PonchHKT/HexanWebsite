import styles from "../styles/contact.module.scss";
import data from "../data/data.json";

function Contact() {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const request = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...name,
      }),
    });

    const response = await request.json();

    console.log(response);

    console.log(event.target.getAttribute("name"));
  };
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactTitle}>
        <hr />
        <h1>{data.contact.title}</h1>
        <p>{data.contact.desc}</p>
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} name="contact" method="POST" netlify>
          <input
            type="email"
            name="email"
            value=""
            required
            placeholder={data.contact.input.placeholder}
          />
          <button type="submit">{data.contact.button.text}</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
