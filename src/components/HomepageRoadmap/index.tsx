import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import Icon from "@site/src/components/Icon";
import styles from "./styles.module.css";

type Stage = {
  step: string;
  title: string;
  duration: string;
  summary: string;
  items: string[];
  to: string;
};

const stages: Stage[] = [
  {
    step: "01",
    title: translate({
      id: "home.roadmap.stage1.title",
      message: "看得懂、敢開口",
    }),
    duration: translate({
      id: "home.roadmap.stage1.duration",
      message: "第 1–2 週",
    }),
    summary: translate({
      id: "home.roadmap.stage1.summary",
      message: "先建立正確的心理模型，知道 AI 能做什麼、不能做什麼。",
    }),
    items: [
      translate({
        id: "home.roadmap.stage1.item1",
        message: "註冊一個主力 AI 助理（ChatGPT / Claude / Gemini 擇一）",
      }),
      translate({
        id: "home.roadmap.stage1.item2",
        message: "搞懂大型語言模型在做什麼、為什麼會說錯話",
      }),
      translate({
        id: "home.roadmap.stage1.item3",
        message: "學會把「一句話請求」寫成「完整任務描述」",
      }),
      translate({
        id: "home.roadmap.stage1.item4",
        message: "建立自己的資料安全底線：哪些內容不能貼",
      }),
    ],
    to: "/start",
  },
  {
    step: "02",
    title: translate({
      id: "home.roadmap.stage2.title",
      message: "用得順、省得多",
    }),
    duration: translate({
      id: "home.roadmap.stage2.duration",
      message: "第 3–8 週",
    }),
    summary: translate({
      id: "home.roadmap.stage2.summary",
      message: "把 AI 塞進你每天真正在做的事，讓省下的時間看得見。",
    }),
    items: [
      translate({
        id: "home.roadmap.stage2.item1",
        message: "依職業建立 5–10 則自己的提示詞模板",
      }),
      translate({
        id: "home.roadmap.stage2.item2",
        message: "學會上傳檔案、讀長文件、做資料整理",
      }),
      translate({
        id: "home.roadmap.stage2.item3",
        message: "分辨哪些任務適合 AI、哪些該自己做",
      }),
      translate({
        id: "home.roadmap.stage2.item4",
        message: "養成查證習慣：AI 的答案要怎麼驗",
      }),
    ],
    to: "/resources/prompts",
  },
  {
    step: "03",
    title: translate({
      id: "home.roadmap.stage3.title",
      message: "組流程、放大產出",
    }),
    duration: translate({
      id: "home.roadmap.stage3.duration",
      message: "第 9 週之後",
    }),
    summary: translate({
      id: "home.roadmap.stage3.summary",
      message: "從一次一個問題，進化成一整套會自己跑的工作流程。",
    }),
    items: [
      translate({
        id: "home.roadmap.stage3.item1",
        message: "建立個人知識庫，讓 AI 讀你的資料回答",
      }),
      translate({
        id: "home.roadmap.stage3.item2",
        message: "認識 Agent 與自動化工具，把重複工作交出去",
      }),
      translate({
        id: "home.roadmap.stage3.item3",
        message: "不會寫程式也能做出小工具（Vibe Coding 入門）",
      }),
      translate({
        id: "home.roadmap.stage3.item4",
        message: "在團隊裡推廣：流程、規範與教學",
      }),
    ],
    to: "/resources/workflows",
  },
];

export default function HomepageRoadmap(): ReactNode {
  return (
    <section className={styles.roadmap}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>
            <Icon name="route" size={14} />
            <Translate id="home.roadmap.badge">學習地圖</Translate>
          </span>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="home.roadmap.title">
              三個階段，從零到把 AI 用進日常工作
            </Translate>
          </Heading>
          <p className={styles.sectionSubtitle}>
            <Translate id="home.roadmap.subtitle">
              不必一次學完。照著順序走，每個階段都有明確的「學完就能做到什麼」
            </Translate>
          </p>
        </div>

        <div className={styles.stageGrid}>
          {stages.map((stage) => (
            <div key={stage.step} className={styles.stageCard}>
              <div className={styles.stageHead}>
                <span className={styles.stageStep}>{stage.step}</span>
                <span className={styles.stageDuration}>{stage.duration}</span>
              </div>
              <Heading as="h3" className={styles.stageTitle}>
                {stage.title}
              </Heading>
              <p className={styles.stageSummary}>{stage.summary}</p>
              <ul className={styles.stageList}>
                {stage.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className={styles.stageLink} to={stage.to}>
                <Translate id="home.roadmap.stageLink">進入這個階段</Translate>
                <Icon name="arrowRight" size={15} />
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.roadmapFooter}>
          <Link className={styles.roadmapBtn} to="/roadmap">
            <Translate id="home.roadmap.viewFull">查看完整學習地圖</Translate>
            <Icon name="arrowRight" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
