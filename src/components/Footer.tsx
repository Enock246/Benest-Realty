import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>© {new Date().getFullYear()} Benest Realty. All rights reserved.</p>
        <div className={styles.links}>
          <a href="mailto:hello@benestrealty.com">hello@benestrealty.com</a>
        </div>
      </div>
    </footer>
  );
}
