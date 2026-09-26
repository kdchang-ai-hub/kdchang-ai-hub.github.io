import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Icon, { type IconName } from "@site/src/components/Icon";

import styles from "./learn.module.css";

type Stage = {
  n: string;
  title: string;
  meta: string;
  goal: string;
  learn: string[];
  done: string[];
  links: { label: string; to: string }[];
};

const stages: Stage[] = [
  {
    n: "1",
    title: translate({ id: "roadmap.stage1.title", message: "看得懂、敢開口" }),
    meta: translate({
      id: "roadmap.stage1.meta",
      message: "第 1–2 週 · 每天 15 分鐘",
    }),
    goal: translate({
      id: "roadmap.stage1.goal",
      message:
        "建立正確的心理模型，知道 AI 能做什麼、不能做什麼，並且敢開口問。",
    }),
    learn: [
      translate({
        id: "roadmap.stage1.learn1",
        message: "大型語言模型到底在做什麼（用比喻理解，不碰數學）",
      }),
      translate({
        id: "roadmap.stage1.learn2",
        message: "為什麼 AI 會一本正經地說錯話：幻覺是怎麼來的",
      }),
      translate({
        id: "roadmap.stage1.learn3",
        message: "Token、上下文、對話視窗這些詞的實際意義",
      }),
      translate({
        id: "roadmap.stage1.learn4",
        message: "四段式提問法：角色 × 任務 × 脈絡 × 格式",
      }),
      translate({
        id: "roadmap.stage1.learn5",
        message: "資料安全底線：哪些內容永遠不要貼進 AI",
      }),
    ],
    done: [
      translate({
        id: "roadmap.stage1.done1",
        message: "能用自己的話跟同事解釋「AI 為什麼會說錯話」",
      }),
      translate({
        id: "roadmap.stage1.done2",
        message: "能把一句模糊的請求，改寫成一段清楚的任務描述",
      }),
      translate({
        id: "roadmap.stage1.done3",
        message: "遇到 AI 給的數字或法條，會反射性地去查證",
      }),
    ],
    links: [
      {
        label: translate({
          id: "roadmap.stage1.link1",
          message: "新手起步：20 分鐘上手",
        }),
        to: "/start",
      },
      {
        label: translate({ id: "roadmap.stage1.link2", message: "AI 基礎觀念" }),
        to: "/resources/ai-basics",
      },
      {
        label: translate({
          id: "roadmap.stage1.link3",
          message: "安全、隱私與判斷力",
        }),
        to: "/resources/safety",
      },
    ],
  },
  {
    n: "2",
    title: translate({ id: "roadmap.stage2.title", message: "用得順、省得多" }),
    meta: translate({
      id: "roadmap.stage2.meta",
      message: "第 3–8 週 · 每天 15–30 分鐘",
    }),
    goal: translate({
      id: "roadmap.stage2.goal",
      message:
        "把 AI 塞進你每天真正在做的事，讓省下來的時間看得見、說得出來。",
    }),
    learn: [
      translate({
        id: "roadmap.stage2.learn1",
        message: "依你的職業建立 5–10 則專屬提示詞模板",
      }),
      translate({
        id: "roadmap.stage2.learn2",
        message: "工具分流：寫作、簡報、圖像、影音、研究各找誰",
      }),
      translate({
        id: "roadmap.stage2.learn3",
        message: "上傳檔案與長文件處理：摘要、比對、找出重點",
      }),
      translate({
        id: "roadmap.stage2.learn4",
        message: "資料整理：把雜亂資訊變成表格、大綱、行動清單",
      }),
      translate({
        id: "roadmap.stage2.learn5",
        message: "判斷力：哪些任務適合交給 AI、哪些一定要自己做",
      }),
    ],
    done: [
      translate({
        id: "roadmap.stage2.done1",
        message: "有一份自己的提示詞筆記，遇到同類工作直接複製就能用",
      }),
      translate({
        id: "roadmap.stage2.done2",
        message: "至少有兩項每週例行工作，時間被砍掉一半以上",
      }),
      translate({
        id: "roadmap.stage2.done3",
        message: "能說清楚「這件事我為什麼不交給 AI」",
      }),
    ],
    links: [
      {
        label: translate({ id: "roadmap.stage2.link1", message: "提示詞庫" }),
        to: "/resources/prompts",
      },
      {
        label: translate({ id: "roadmap.stage2.link2", message: "AI 工具圖鑑" }),
        to: "/resources/ai-tools",
      },
      {
        label: translate({
          id: "roadmap.stage2.link3",
          message: "職場與生活應用",
        }),
        to: "/resources/use-cases",
      },
    ],
  },
  {
    n: "3",
    title: translate({ id: "roadmap.stage3.title", message: "組流程、放大產出" }),
    meta: translate({
      id: "roadmap.stage3.meta",
      message: "第 9 週之後 · 依專案推進",
    }),
    goal: translate({
      id: "roadmap.stage3.goal",
      message:
        "從一次問一個問題，進化成一整套會自己跑的工作流程，甚至帶著團隊一起用。",
    }),
    learn: [
      translate({
        id: "roadmap.stage3.learn1",
        message: "建立個人／團隊知識庫，讓 AI 讀你的資料來回答（RAG 的概念）",
      }),
      translate({
        id: "roadmap.stage3.learn2",
        message: "認識 AI Agent：什麼情況該讓 AI 自己執行多個步驟",
      }),
      translate({
        id: "roadmap.stage3.learn3",
        message: "自動化工具串接：把重複性工作變成排程",
      }),
      translate({
        id: "roadmap.stage3.learn4",
        message: "不會寫程式也能做出小工具：Vibe Coding 入門",
      }),
      translate({
        id: "roadmap.stage3.learn5",
        message: "在團隊裡推廣：使用規範、共用提示詞、教學與導入",
      }),
    ],
    done: [
      translate({
        id: "roadmap.stage3.done1",
        message: "有一條每週自動跑的流程，不需要你每次重新下指令",
      }),
      translate({
        id: "roadmap.stage3.done2",
        message: "做出過一個自己在用的小工具或自動化腳本",
      }),
      translate({
        id: "roadmap.stage3.done3",
        message: "能設計一份團隊可用的 AI 使用規範與提示詞庫",
      }),
    ],
    links: [
      {
        label: translate({
          id: "roadmap.stage3.link1",
          message: "工作流與自動化",
        }),
        to: "/resources/workflows",
      },
      {
        label: translate({
          id: "roadmap.stage3.link2",
          message: "Vibe Coding 入門",
        }),
        to: "/resources/vibe-coding",
      },
      {
        label: translate({ id: "roadmap.stage3.link3", message: "名詞速查表" }),
        to: "/resources/glossary",
      },
    ],
  },
];

const principles: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "target",
    title: translate({
      id: "roadmap.principle1.title",
      message: "從真實任務開始",
    }),
    text: translate({
      id: "roadmap.principle1.text",
      message:
        "不要為了學 AI 而學。挑一件你這週本來就要做的事，用 AI 做做看，學習才會留下來。",
    }),
  },
  {
    icon: "sliders",
    title: translate({
      id: "roadmap.principle2.title",
      message: "一次只換一個變數",
    }),
    text: translate({
      id: "roadmap.principle2.text",
      message:
        "換工具、換模型、換問法，一次只動一項。否則你永遠不知道是哪一步讓結果變好。",
    }),
  },
  {
    icon: "bookmark",
    title: translate({
      id: "roadmap.principle3.title",
      message: "把有效的問法存起來",
    }),
    text: translate({
      id: "roadmap.principle3.text",
      message:
        "問到好答案時，立刻把那段提示詞存進筆記。三個月後，這份筆記比任何教學都有用。",
    }),
  },
  {
    icon: "search",
    title: translate({
      id: "roadmap.principle4.title",
      message: "永遠保留最後判斷",
    }),
    text: translate({
      id: "roadmap.principle4.text",
      message:
        "AI 負責草稿與速度，你負責事實與責任。署名的是你，所以查證也是你的工作。",
    }),
  },
];

export default function Roadmap(): ReactNode {
  return (
    <Layout
      title={translate({ id: "roadmap.meta.title", message: "學習地圖" })}
      description={translate({
        id: "roadmap.meta.description",
        message:
          "AI 自學補給站三階段 AI 自學地圖：從建立觀念、融入日常工作，到組出自己的自動化流程，每階段都有明確的學習項目與過關標準。",
      })}
    >
      <header className={styles.pageHero}>
        <div className="container">
          <span className={styles.pageEyebrow}>
            <Icon name="route" size={14} />
            <Translate id="roadmap.hero.badge">學習地圖</Translate>
          </span>
          <Heading as="h1" className={styles.pageTitle}>
            <Translate id="roadmap.hero.title">
              三個階段，把 AI 學成真正的工作能力
            </Translate>
          </Heading>
          <p className={styles.pageLead}>
            <Translate id="roadmap.hero.lead">
              網路上的 AI 教學多到看不完，問題從來不是資源不夠，而是不知道順序。
              這份地圖幫你排好順序：每個階段學什麼、學到什麼程度算過關、接下來去哪裡。
            </Translate>
          </p>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.stepList}>
              {stages.map((stage) => (
                <div key={stage.n} className={styles.stepCard}>
                  <div className={styles.stepNumber}>{stage.n}</div>
                  <div>
                    <Heading as="h2" className={styles.stepTitle}>
                      <Translate
                        id="roadmap.stage.heading"
                        values={{ n: stage.n, title: stage.title }}
                      >
                        {"階段 {n}：{title}"}
                      </Translate>
                    </Heading>
                    <span className={styles.stepMeta}>{stage.meta}</span>
                    <div className={styles.stepBody}>
                      <p>
                        <strong>
                          <Translate id="roadmap.stage.goalLabel">
                            這個階段的目標：
                          </Translate>
                        </strong>
                        {stage.goal}
                      </p>

                      <p style={{ marginBottom: 0, fontWeight: 600 }}>
                        <Translate id="roadmap.stage.learnLabel">
                          會學到什麼
                        </Translate>
                      </p>
                      <ul className={styles.checkList}>
                        {stage.learn.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <p
                        style={{
                          marginTop: "1rem",
                          marginBottom: 0,
                          fontWeight: 600,
                        }}
                      >
                        <Translate id="roadmap.stage.doneLabel">
                          怎樣算過關
                        </Translate>
                      </p>
                      <ul className={styles.checkList}>
                        {stage.done.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <p style={{ marginTop: "1.1rem", marginBottom: 0 }}>
                        {stage.links.map((link, i) => (
                          <span key={link.to}>
                            {i > 0 && " · "}
                            <Link to={link.to}>{link.label}</Link>
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              <Translate id="roadmap.principles.title">
                走這條路的四個原則
              </Translate>
            </Heading>
            <p className={styles.sectionLead}>
              <Translate id="roadmap.principles.lead">
                不管你在哪個階段，這四件事都適用。
              </Translate>
            </p>
            <div className={styles.cardGrid}>
              {principles.map((p) => (
                <div key={p.title} className={styles.card}>
                  <span className={styles.cardIcon}>
                    <Icon name={p.icon} size={20} />
                  </span>
                  <Heading as="h3" className={styles.cardTitle}>
                    {p.title}
                  </Heading>
                  <p className={styles.cardText}>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className={styles.ctaWrap}>
              <Heading as="h2" className={styles.ctaTitle}>
                <Translate id="roadmap.cta.title">
                  不確定自己在哪一階段？
                </Translate>
              </Heading>
              <p className={styles.ctaText}>
                <Translate id="roadmap.cta.text">
                  如果你還沒用 AI 完成過一件真實的工作，就從階段 1
                  開始；如果你已經天天在用、只是覺得沒有變快，那你需要的是階段 2
                  的提示詞與工具分流。
                </Translate>
              </p>
              <div className={styles.btnRow}>
                <Link className={styles.primaryBtn} to="/start">
                  <Translate id="roadmap.cta.primary">從新手起步開始</Translate>
                </Link>
                <Link className={styles.secondaryBtn} to="/resources">
                  <Translate id="roadmap.cta.secondary">瀏覽全部學習資源</Translate>
                  <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
