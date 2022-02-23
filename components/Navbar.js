import styles from "../styles/navbar.module.scss";

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navBar}>
        <img src="/images/logo.png" />
      </div>
    </div>
  );
}

export default Navbar;
