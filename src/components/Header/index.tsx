import styles from "./styles.module.scss";

import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} alt="Logo ignite feed" />
    </header>
  );
}
