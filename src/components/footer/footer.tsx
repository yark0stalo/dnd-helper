import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss"

export default function Footer() {
    return (
      <footer className={styles.footer}>
         <ul className="footer-navigation">
        <li><Link href="#">Main</Link></li>
        <li><Link href="stats.html">Stats generator</Link></li>
        <li><Link href="dice-roller.html">Dice Roller</Link></li>
      </ul>
      <ul className={styles.contacts}>
        <li>
          <a href="https://github.com/yark0stalo"
            ><Image src="/images/github.svg" width={30} height={30} alt="github"
          /></a>
        </li>
      </ul>
      </footer>
    );
  }