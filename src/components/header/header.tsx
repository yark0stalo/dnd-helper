import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles['header-navigation']}>
        <ul>
          <li>
            <Link href={"/"}>Main</Link>
          </li>

          <li>
          <Link href={"/stats"}>Stats Generator</Link>
          </li>
          <li>
          <Link href={"/dice-roller"}>Dice Roller</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
