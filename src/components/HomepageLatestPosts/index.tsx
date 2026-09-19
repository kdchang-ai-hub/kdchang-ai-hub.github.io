import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import Icon from "@site/src/components/Icon";
import styles from "./styles.module.css";

type PostItem = {
  title: string;
  slug: string;
  tag: string;
  excerpt: string;
  date: string;
};

const latestPosts: PostItem[] = [
  {
    title: translate({
      id: "home.posts.generativeAi.title",
      message: "生成式 AI 是什麼？給完全新手的 10 分鐘入門",
    }),
    slug: "what-is-generative-ai-beginner-guide",
    tag: translate({ id: "home.posts.tag.basics", message: "AI 基礎" }),
    excerpt: translate({
      id: "home.posts.generativeAi.excerpt",
      message:
        "不談數學、不談程式，用你聽得懂的比喻說明大型語言模型怎麼運作、它擅長什麼、又為什麼會犯錯。看完這篇，你就知道該怎麼跟 AI 說話。",
    }),
    date: "2026-09-19",
  },
  {
    title: translate({
      id: "home.posts.goodPrompt.title",
      message: "寫出好提示詞的 6 個原則（附可直接複製的模板）",
    }),
    slug: "how-to-write-good-ai-prompt",
    tag: translate({ id: "home.posts.tag.prompts", message: "提示詞" }),
    excerpt: translate({
      id: "home.posts.goodPrompt.excerpt",
      message:
        "同樣一個問題，為什麼別人問得到好答案、你卻得到一堆廢話？六個原則搞定角色、脈絡、格式與範例，讓 AI 第一次就給你要的東西。",
    }),
    date: "2026-09-16",
  },
  {
    title: translate({
      id: "home.posts.comparison.title",
      message: "ChatGPT、Claude、Gemini 該選哪一個？2026 實用比較",
    }),
    slug: "chatgpt-claude-gemini-comparison",
    tag: translate({ id: "home.posts.tag.tools", message: "AI 工具" }),
    excerpt: translate({
      id: "home.posts.comparison.excerpt",
      message:
        "三大 AI 助理各有脾氣。這篇用「你平常在做什麼」來分流：寫作、讀長文件、查資料、做簡報、寫程式，各自該找誰，免費版夠不夠用。",
    }),
    date: "2026-09-12",
  },
  {
    title: translate({
      id: "home.posts.hallucination.title",
      message: "AI 為什麼會一本正經地說錯話？幻覺的辨識與查證流程",
    }),
    slug: "ai-hallucination-and-fact-check",
    tag: translate({ id: "home.posts.tag.safety", message: "安全與判斷" }),
    excerpt: translate({
      id: "home.posts.hallucination.excerpt",
      message:
        "AI 給的法條、數據、引用可能整段是編的。理解幻覺從何而來，並建立一套 30 秒就能跑完的查證流程，讓你用得快也用得安心。",
    }),
    date: "2026-09-08",
  },
];

export default function HomepageLatestPosts(): ReactNode {
  return (
    <section className={styles.latestPosts}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>
            <Icon name="file" size={14} />
            <Translate id="home.posts.badge">最新文章</Translate>
          </span>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="home.posts.title">精選閱讀</Translate>
          </Heading>
          <p className={styles.sectionSubtitle}>
            <Translate id="home.posts.subtitle">
              每一篇都從「你會遇到的問題」出發，看完就能動手試
            </Translate>
          </p>
        </div>
        <div className={styles.postGrid}>
          {latestPosts.map((post) => (
            <div key={post.slug} className={styles.postCard}>
              <span className={styles.postTag}>{post.tag}</span>
              <Link to={`/blog/${post.slug}`} className={styles.postTitle}>
                {post.title}
              </Link>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <div className={styles.postFooter}>
                <span className={styles.postDate}>{post.date}</span>
                <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                  <Translate id="home.posts.readMore">閱讀更多</Translate>
                  <Icon name="arrowRight" size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.viewAllWrapper}>
          <Link to="/blog" className={styles.viewAllBtn}>
            <Translate id="home.posts.viewAll">查看所有文章</Translate>
            <Icon name="arrowRight" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
