import type { ReactNode } from "react";
import { translate } from "@docusaurus/Translate";
import Icon, { type IconName } from "@site/src/components/Icon";
import styles from "./styles.module.css";

type StatItem = {
  number: string;
  label: string;
  icon: IconName;
};

const stats: StatItem[] = [
  {
    number: "8",
    label: translate({ id: "home.stats.topics", message: "學習主題" }),
    icon: "layers",
  },
  {
    number: "3",
    label: translate({ id: "home.stats.stages", message: "階段學習地圖" }),
    icon: "route",
  },
  {
    number: "40+",
    label: translate({
      id: "home.stats.toolsAndPrompts",
      message: "AI 工具與提示詞",
    }),
    icon: "wrench",
  },
  {
    number: "20+",
    label: translate({ id: "home.stats.free", message: "學習資源" }),
    icon: "check",
  },
];

export default function HomepageStats(): ReactNode {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statIcon}>
                <Icon name={stat.icon} size={18} />
              </span>
              <div>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
