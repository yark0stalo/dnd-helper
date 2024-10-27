"use client";

import Main from "@/components/main/main";
import StatCard from "@/components/stat-card/stat-card";
import { useState } from "react";
import styles from "./stats.module.scss";

export type Stat = {
  name: string;
  value: number | undefined;
  addOne: boolean;
  addTwo: boolean;
};

export default function Stats() {
  const [stats, setStats] = useState<Stat[]>([
    {
      name: "Strength",
      value: undefined,
      addOne: false,
      addTwo: false,
    },
    {
      name: "Agility",
      value: undefined,
      addOne: false,
      addTwo: false,
    },
    {
      name: "Constitution",
      value: undefined,
      addOne: false,
      addTwo: false,
    },
    {
      name: "Intellegent",
      value: undefined,
      addOne: false,
      addTwo: false,
    },
    {
      name: "Wisdom",
      value: undefined,
      addOne: false,
      addTwo: false,
    },
    {
      name: "Charisma",
      value: undefined,
      addOne: false,
      addTwo: false,
    },
  ]);

  const cards = stats.map((stat, key) => {
    return (
      <StatCard
        key={key}
        name={stat.name}
        value={stat.value}
        addOne={stat.addOne}
        addTwo={stat.addTwo}
      ></StatCard>
    );
  });

  function generateStats() {
    const newStats = [...stats];
    newStats.forEach((stat) => {
      stat.value = Math.floor(Math.random() * (18 - 3) + 3);
      console.log(stat);
    });
    setStats(newStats);
  }

  return (
    <Main>
      <div className={styles.content}>
        <div className={styles.layout}></div>
        <div className={styles.header}>
          <h1>Stats generator</h1>
          <p>This tool can help you with fast creation of character stats</p>
        </div>
        <ul className={styles["stats-list"]}>{cards}</ul>
        <button className={styles["generation-button"]} onClick={generateStats}>
          Generate stats
        </button>
      </div>
    </Main>
  );
}
