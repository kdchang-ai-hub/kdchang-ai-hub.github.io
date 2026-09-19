import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Icon from "@site/src/components/Icon";
import HomepageStats from "@site/src/components/HomepageStats";
import HomepageRoadmap from "@site/src/components/HomepageRoadmap";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageLatestPosts from "@site/src/components/HomepageLatestPosts";

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <span className={styles.heroEyebrow}>
          <Translate id="home.hero.badge">最新手友善的 AI 自學平台</Translate>
        </span>

        <h1 className={styles.heroTitle}>
          <Translate id="home.hero.title.line1">不用會寫程式</Translate>
          <br />
          <Translate id="home.hero.title.line2">也能把 AI 用得很好</Translate>
        </h1>

        <p className={styles.heroSubtitle}>
          <Translate id="home.hero.subtitle">
            從基礎觀念、工具挑選、
            提示詞模板到工作流自動化，照著學習地圖走，一步一步把 AI
            變成你的日常工具。
          </Translate>
        </p>

        <div className={styles.buttons}>
          <Link className={styles.primaryBtn} to="/start">
            <Translate id="home.hero.cta.primary">
              我是新手，從這裡開始
            </Translate>
          </Link>
          <Link className={styles.secondaryBtn} to="/roadmap">
            <Translate id="home.hero.cta.secondary">看學習地圖</Translate>
            <Icon name="arrowRight" size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaWrapper}>
          <span className={styles.ctaEyebrow}>
            <Icon name="arrowRight" size={14} />
            <Translate id="home.cta.badge">下一步</Translate>
          </span>
          <h2 className={styles.ctaTitle}>
            <Translate id="home.cta.title">今天就挑一件事，交給 AI 做</Translate>
          </h2>
          <p className={styles.ctaSubtitle}>
            <Translate id="home.cta.subtitle">
              學 AI
              最快的方法不是看完所有教學，而是找一件你每週都要做的煩人小事，
              試著讓 AI 幫你做一次。從「新手起步」開始，20 分鐘就會有第一個成果。
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link className={styles.primaryBtn} to="/start">
              <Translate id="home.cta.primary">開始 20 分鐘起步</Translate>
            </Link>
            <Link className={styles.secondaryBtn} to="/resources">
              <Translate id="home.cta.secondary">瀏覽全部學習資源</Translate>
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  // Site title and tagline are localized in docusaurus.config.ts
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <HomepageStats />
      <main>
        <HomepageRoadmap />
        <HomepageFeatures />
        <HomepageLatestPosts />
      </main>
      <HomepageCTA />
    </Layout>
  );
}
