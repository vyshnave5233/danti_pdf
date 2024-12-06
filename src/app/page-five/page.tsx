import Header from "@/theme/components/header/header";
import React from "react";
import styles from "./page-five.module.scss";

const PageFive = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.recommendations}>
          <h2 className={styles.recommendations__title}>Recommendations</h2>
          <div className={styles.recommendations__card}>
            <p className={styles.recommendations__card__text}>
              Partner with local or global business mentorship programs like EO
              (Entrepreneurs&apos; Organization) or SCORE.
            </p>
            <p className={styles.recommendations__card__text}>
              Engage a mentor experienced in your family&apos; industry to provide
              hands-on insights.
            </p>
            <p className={styles.recommendations__card__text}>
              Arrange shadowing opportunities in successful businesses.
            </p>
            <p className={styles.recommendations__card__text}>
              Work with certified financial planners (CFPs) to teach financial
              literacy.
            </p>
            <p className={styles.recommendations__card__text}>
              Consider courses like those offered by Junior Achievement or Money
              Habitudes.
            </p>
          </div>
        </div>
        <div className={styles.footer}>
          <p className={styles.footer__text}>
            Danti is a secure family office operating system that has been
            designed for Ultra High Net Worths, Single and Multi-Family Offices.
            The vision is to build a system to ensure that all 10 areas required
            for Generational Wealth are covered.
          </p>
          <p className={styles.footer__text}>
            We are much more than a wealth tech platform.
          </p>
          <p className={styles.footer__text}>
            We are the solution for Generational Wealth.
          </p>
          <p className={styles.footer__text}>
            Danti utilises technology to ensure that your generational wealth
            strategy is adopted with unity and cohesion. It acts as the glue to
            keep everything together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageFive;
