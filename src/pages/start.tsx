import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Icon from "@site/src/components/Icon";

import styles from "./learn.module.css";

type Step = {
  n: string;
  title: string;
  meta: string;
  body: ReactNode;
};

const steps: Step[] = [
  {
    n: "1",
    title: translate({
      id: "start.step1.title",
      message: "挑一個主力 AI 助理，只挑一個",
    }),
    meta: translate({ id: "start.step1.meta", message: "約 5 分鐘" }),
    body: (
      <>
        <p>
          <Translate id="start.step1.p1">
            新手最常見的卡關，是同時開了五個 AI
            帳號、每個都用一點、每個都不熟。先選一個當主力，用滿兩週再說。
          </Translate>
        </p>
        <ul className={styles.checkList}>
          <li>
            <Translate id="start.step1.li1">
              想要最通用、生態最完整 → 選 ChatGPT
            </Translate>
          </li>
          <li>
            <Translate id="start.step1.li2">
              常要讀長文件、寫長文章、重視語氣自然 → 選 Claude
            </Translate>
          </li>
          <li>
            <Translate id="start.step1.li3">
              已經重度使用 Gmail／Google 文件 → 選 Gemini
            </Translate>
          </li>
        </ul>
        <p>
          <Translate
            id="start.step1.p2"
            values={{
              link: (
                <Link to="/resources/ai-tools">
                  <Translate id="start.step1.p2.link">AI 工具圖鑑</Translate>
                </Link>
              ),
            }}
          >
            {"三家都有免費版，新手階段完全夠用。詳細比較看 {link}。"}
          </Translate>
        </p>
      </>
    ),
  },
  {
    n: "2",
    title: translate({ id: "start.step2.title", message: "先劃好安全底線" }),
    meta: translate({ id: "start.step2.meta", message: "約 3 分鐘" }),
    body: (
      <>
        <p>
          <Translate id="start.step2.p1">
            在你貼上第一段文字之前，先記住這條規則：
          </Translate>
          <strong>
            <Translate id="start.step2.p1.strong">
              會讓你不想被同事看到的內容，就不要貼進 AI。
            </Translate>
          </strong>
        </p>
        <ul className={styles.checkList}>
          <li>
            <Translate id="start.step2.li1">
              身分證字號、金融帳號、病歷、密碼：一律不貼
            </Translate>
          </li>
          <li>
            <Translate id="start.step2.li2">
              客戶名單、未公開報價、公司內部文件：先問過公司政策
            </Translate>
          </li>
          <li>
            <Translate id="start.step2.li3">
              需要貼的資料，先把姓名換成「甲君」「A 公司」等代號
            </Translate>
          </li>
        </ul>
        <p>
          <Translate
            id="start.step2.p2"
            values={{
              link: (
                <Link to="/resources/safety">
                  <Translate id="start.step2.p2.link">
                    安全、隱私與判斷力
                  </Translate>
                </Link>
              ),
            }}
          >
            {"完整說明在 {link}。"}
          </Translate>
        </p>
      </>
    ),
  },
  {
    n: "3",
    title: translate({
      id: "start.step3.title",
      message: "用一個公式問出第一個好答案",
    }),
    meta: translate({ id: "start.step3.meta", message: "約 7 分鐘" }),
    body: (
      <>
        <p>
          <Translate id="start.step3.p1">
            別再只打一句「幫我寫一封信」。用這個四段式公式，你的答案品質會立刻不一樣：
          </Translate>
        </p>
        <div className={styles.callout}>
          <strong>
            <Translate id="start.step3.formula.roleLabel">角色</Translate>
          </strong>
          <Translate id="start.step3.formula.role">
            ：你是一位有十年經驗的行銷企劃。
          </Translate>
          <br />
          <strong>
            <Translate id="start.step3.formula.taskLabel">任務</Translate>
          </strong>
          <Translate id="start.step3.formula.task">
            ：幫我寫一封邀請合作的開發信。
          </Translate>
          <br />
          <strong>
            <Translate id="start.step3.formula.contextLabel">脈絡</Translate>
          </strong>
          <Translate id="start.step3.formula.context">
            ：對方是連鎖咖啡品牌的行銷經理，我們是本地烘豆商，
            希望談聯名。我們的優勢是小批量客製與在地故事。
          </Translate>
          <br />
          <strong>
            <Translate id="start.step3.formula.formatLabel">格式</Translate>
          </strong>
          <Translate id="start.step3.formula.format">
            ：300 字以內、口語但專業、結尾附兩個具體提案。
          </Translate>
        </div>
        <p style={{ marginTop: "0.9rem" }}>
          <Translate
            id="start.step3.p2"
            values={{
              link: (
                <Link to="/resources/prompts">
                  <Translate id="start.step3.p2.link">提示詞庫</Translate>
                </Link>
              ),
            }}
          >
            {"把上面四行換成你自己的情境，貼進 AI，看看差別。更多技巧在 {link}。"}
          </Translate>
        </p>
      </>
    ),
  },
  {
    n: "4",
    title: translate({
      id: "start.step4.title",
      message: "選一件你每週都要做的煩人小事，交給 AI 做一次",
    }),
    meta: translate({ id: "start.step4.meta", message: "約 5 分鐘" }),
    body: (
      <>
        <p>
          <Translate id="start.step4.p1">
            學 AI 不是靠看完教學，是靠做完第一件事。現在就從下面挑一個，做完再往下讀：
          </Translate>
        </p>
        <ul className={styles.checkList}>
          <li>
            <Translate id="start.step4.li1">
              把一份冗長的會議記錄整理成 5 點結論與 3 項待辦
            </Translate>
          </li>
          <li>
            <Translate id="start.step4.li2">
              把一封難寫的信，先請 AI 給你三種語氣版本
            </Translate>
          </li>
          <li>
            <Translate id="start.step4.li3">
              把一篇看不完的英文文章，請 AI 用中文條列重點
            </Translate>
          </li>
          <li>
            <Translate id="start.step4.li4">
              把一堆雜亂的想法，請 AI 整理成簡報大綱
            </Translate>
          </li>
        </ul>
      </>
    ),
  },
  {
    n: "5",
    title: translate({ id: "start.step5.title", message: "養成查證的反射動作" }),
    meta: translate({ id: "start.step5.meta", message: "約 3 分鐘" }),
    body: (
      <>
        <p>
          <Translate id="start.step5.p1">
            AI
            會用非常有自信的語氣講錯話，這叫「幻覺」。凡是會影響決定的內容，都要查：
          </Translate>
        </p>
        <ul className={styles.checkList}>
          <li>
            <Translate id="start.step5.li1">
              數字、日期、法條、價格 → 一律另外查來源
            </Translate>
          </li>
          <li>
            <Translate id="start.step5.li2">
              它引用的書名、論文、網址 → 點開確認真的存在
            </Translate>
          </li>
          <li>
            <Translate id="start.step5.li3">
              反問它一句「這個說法的依據是什麼？有沒有可能是錯的？」
            </Translate>
          </li>
        </ul>
        <p>
          <Translate
            id="start.step5.p2"
            values={{
              link: (
                <Link to="/resources/ai-basics">
                  <Translate id="start.step5.p2.link">AI 基礎觀念</Translate>
                </Link>
              ),
            }}
          >
            {"原理與完整流程看 {link}。"}
          </Translate>
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    q: translate({ id: "start.faq1.q", message: "我完全不懂電腦，也學得會嗎？" }),
    a: translate({
      id: "start.faq1.a",
      message:
        "可以。本站所有內容都假設你沒有技術背景，用的是一般人的語言。你只要會用瀏覽器打字，就能開始。",
    }),
  },
  {
    q: translate({ id: "start.faq2.q", message: "一定要付費訂閱嗎？" }),
    a: translate({
      id: "start.faq2.a",
      message:
        "不用。新手階段免費版完全夠用。等到你每天都在用、而且明顯被額度卡住時，再考慮付費也不遲。",
    }),
  },
  {
    q: translate({ id: "start.faq3.q", message: "AI 會取代我的工作嗎？" }),
    a: translate({
      id: "start.faq3.a",
      message:
        "比較實際的說法是：會用 AI 的人，做事速度會拉開差距。與其擔心，不如先讓自己成為那個會用的人——這也是這個站存在的理由。",
    }),
  },
  {
    q: translate({ id: "start.faq4.q", message: "我需要學寫程式嗎？" }),
    a: translate({
      id: "start.faq4.a",
      message:
        "不需要。本站主線完全不需要程式基礎。如果你之後有興趣做小工具，再看 Vibe Coding 那一章就好。",
    }),
  },
  {
    q: translate({ id: "start.faq5.q", message: "每天要花多少時間？" }),
    a: translate({
      id: "start.faq5.a",
      message:
        "每天 15 分鐘，兩週就能明顯感覺到差別。重點是把 AI 用在真實工作上，而不是額外挪時間「學 AI」。",
    }),
  },
];

export default function Start(): ReactNode {
  return (
    <Layout
      title={translate({ id: "start.meta.title", message: "新手起步" })}
      description={translate({
        id: "start.meta.description",
        message:
          "完全沒有技術背景也沒關係。用 20 分鐘跑完五個步驟，今天就讓 AI 幫你完成第一件真實的工作。",
      })}
    >
      <header className={styles.pageHero}>
        <div className="container">
          <span className={styles.pageEyebrow}>
            <Icon name="flag" size={14} />
            <Translate id="start.hero.badge">新手起步</Translate>
          </span>
          <Heading as="h1" className={styles.pageTitle}>
            <Translate id="start.hero.title">
              20 分鐘，完成你的第一件 AI 工作
            </Translate>
          </Heading>
          <p className={styles.pageLead}>
            <Translate id="start.hero.lead">
              這一頁不解釋理論，只帶你動手。照著五個步驟做完，你會有一個真正用得上的成果，
              以及一套可以重複使用的方法。完全不需要程式基礎。
            </Translate>
          </p>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              <Translate id="start.steps.title">五個步驟</Translate>
            </Heading>
            <p className={styles.sectionLead}>
              <Translate id="start.steps.lead">
                建議依序完成，每一步都不長，中間可以隨時停下來實作。
              </Translate>
            </p>
            <div className={styles.stepList}>
              {steps.map((step) => (
                <div key={step.n} className={styles.stepCard}>
                  <div className={styles.stepNumber}>{step.n}</div>
                  <div>
                    <Heading as="h3" className={styles.stepTitle}>
                      {step.title}
                    </Heading>
                    <span className={styles.stepMeta}>{step.meta}</span>
                    <div className={styles.stepBody}>{step.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              <Translate id="start.faq.title">新手常見問題</Translate>
            </Heading>
            <p className={styles.sectionLead}>
              <Translate id="start.faq.lead">
                這些問題我們被問過很多次，先在這裡一次回答。
              </Translate>
            </p>
            {faqs.map((faq) => (
              <div key={faq.q} className={styles.faqItem}>
                <div className={styles.faqQ}>{faq.q}</div>
                <p className={styles.faqA}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="container">
            <div className={styles.ctaWrap}>
              <Heading as="h2" className={styles.ctaTitle}>
                <Translate id="start.cta.title">
                  完成五個步驟了嗎？下一站是學習地圖
                </Translate>
              </Heading>
              <p className={styles.ctaText}>
                <Translate id="start.cta.text">
                  學習地圖會告訴你接下來三個階段各要學什麼、學到什麼程度算過關，
                  讓你不會在無窮無盡的教學裡迷路。
                </Translate>
              </p>
              <div className={styles.btnRow}>
                <Link className={styles.primaryBtn} to="/roadmap">
                  <Translate id="start.cta.primary">查看學習地圖</Translate>
                </Link>
                <Link className={styles.secondaryBtn} to="/resources">
                  <Translate id="start.cta.secondary">直接逛學習資源</Translate>
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
