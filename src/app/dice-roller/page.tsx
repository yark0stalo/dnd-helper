"use client";

import styles from "./dice-roller.module.scss";
import Main from "@/components/main/main";

export default function DiceRollerPage() {
  return (
    <Main>
      <div className={styles.content}>
        <div className={styles.layout}></div>
        <div className={styles.header}>
          <h1>Dice roller</h1>
          <p>Simple dice roller for your games</p>
        </div>
      </div>
    </Main>
  );
}
