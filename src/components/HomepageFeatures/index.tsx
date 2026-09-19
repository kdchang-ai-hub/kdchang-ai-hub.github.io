import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import Icon, { type IconName } from "@site/src/components/Icon";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: IconName;
  to: string;
  linkLabel: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({ id: "home.features.tools.title", message: "AI 工具圖鑑" }),
    icon: "compass",
    to: "/resources/ai-tools",
    linkLabel: translate({
      id: "home.features.tools.link",
      message: "挑一個工具開始",
    }),
    description: (
      <Translate id="home.features.tools.desc">
        對話、寫作、簡報、圖像、影音、研究、翻譯——每一類都幫你挑好 2~3
        個夠用的工具，直接告訴你「誰適合你」、「免費版能做到哪裡」，不用再自己比價比到頭昏。
      </Translate>
    ),
  },
  {
    title: translate({
      id: "home.features.prompts.title",
      message: "可以直接複製的提示詞庫",
    }),
    icon: "message",
    to: "/resources/prompts",
    linkLabel: translate({
      id: "home.features.prompts.link",
      message: "找你的提示詞",
    }),
    description: (
      <Translate id="home.features.prompts.desc">
        依職業與情境分類的 Prompt
        模板：寫信、做簡報、整理會議記錄、寫報告、備課、找工作。每一則都附上「怎麼改成你的版本」，複製貼上就能用。
      </Translate>
    ),
  },
  {
    title: translate({
      id: "home.features.workflows.title",
      message: "從單次提問到工作流",
    }),
    icon: "workflow",
    to: "/resources/workflows",
    linkLabel: translate({
      id: "home.features.workflows.link",
      message: "把 AI 變成同事",
    }),
    description: (
      <Translate id="home.features.workflows.desc">
        學會把重複的事交給 AI：檔案整理、資料彙整、每週報告自動化。認識 Agent、
        知識庫（RAG）與自動化工具，不寫程式也能組出屬於自己的流程。
      </Translate>
    ),
  },
  {
    title: translate({
      id: "home.features.basics.title",
      message: "看得懂的 AI 基礎觀念",
    }),
    icon: "cpu",
    to: "/resources/ai-basics",
    linkLabel: translate({
      id: "home.features.basics.link",
      message: "3 分鐘搞懂原理",
    }),
    description: (
      <Translate id="home.features.basics.desc">
        什麼是大型語言模型？為什麼 AI
        會一本正經地說錯話？上下文、Token、幻覺這些詞到底在講什麼？用生活比喻講清楚，不用數學。
      </Translate>
    ),
  },
  {
    title: translate({
      id: "home.features.useCases.title",
      message: "真實的職場與生活應用",
    }),
    icon: "target",
    to: "/resources/use-cases",
    linkLabel: translate({
      id: "home.features.useCases.link",
      message: "看看你的職業",
    }),
    description: (
      <Translate id="home.features.useCases.desc">
        行銷、人資、行政、業務、老師、學生、家長、自由工作者——每個角色都有一份
        「今天就能用上」的 AI 應用清單與實際案例。
      </Translate>
    ),
  },
  {
    title: translate({
      id: "home.features.safety.title",
      message: "安全、隱私與判斷力",
    }),
    icon: "shield",
    to: "/resources/safety",
    linkLabel: translate({
      id: "home.features.safety.link",
      message: "先學會保護自己",
    }),
    description: (
      <Translate id="home.features.safety.desc">
        哪些資料不能貼進 AI？怎麼查證 AI
        的答案？公司內部使用要注意什麼？把風險說清楚，才能放心用得久。
      </Translate>
    ),
  },
];

function Feature({ title, icon, to, linkLabel, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4", styles.featureCol)}>
      <div className={styles.featureCard}>
        <span className={styles.iconWrapper}>
          <Icon name={icon} size={20} />
        </span>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDesc}>{description}</p>
        <Link className={styles.featureLink} to={to}>
          {linkLabel}
          <Icon name="arrowRight" size={15} />
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>
            <Icon name="grid" size={14} />
            <Translate id="home.features.badge">站上有什麼</Translate>
          </span>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="home.features.title">
              六大主題，把 AI 從「聽過」變成「會用」
            </Translate>
          </Heading>
          <p className={styles.sectionSubtitle}>
            <Translate id="home.features.subtitle">
              全部免費、全部中文、全部針對沒有技術背景的人重新寫過
            </Translate>
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.to} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
