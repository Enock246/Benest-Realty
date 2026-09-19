"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <strong>BENEST</strong> REALTY
        </Link>
        <div className={styles.links}>
          <a
            href="https://wa.me/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </header>
  );
}
