"use client";
import React from "react";
import styles from "./page-two.module.scss";
import Header from "@/theme/components/header/header";

import consultantImage from "@/theme/images/consultant.png";
import Image from "next/image";

const PageTwo = () => {
  return (
    <>
      <Header />
      <div className={styles.pageTwo}>
        <div className={styles.consultantTitle}>
          <Image
            src={consultantImage}
            alt="consultant"
            width={20}
            height={20}
          />
          <span>Consultant Opinion</span>
        </div>

        {/* Consultant Opinion Section */}
        <div className={styles.consultantOpinion}>
          <p className={styles.text}>
            Effective wealth management for a family requires a consultant to
            balance financial growth, wealth preservation, and family harmony.
            It starts with a purpose-driven plan that aligns financial
            strategies with the family’s core values and long-term goals,
            whether that’s legacy building, philanthropy, or entrepreneurship.
            Establishing clear governance early is essential; structures like
            family charters or councils help streamline decision-making and
            prevent future conflicts. Diversifying investments beyond
            traditional avenues into areas like sustainable ventures or impact
            funds is crucial for adaptability and growth. Preparing the next
            generation through financial education and leadership development
            ensures smooth wealth transfer and continuity. Additionally,
            sustainable strategies, such as tax planning and legal structures
            like trusts, safeguard the family’s wealth against unforeseen
            challenges. A consultant must also be pragmatic, addressing family
            dynamics with empathy and creating frameworks to depersonalize
            conflicts. Ultimately, wealth management should empower families to
            live their values and achieve long-term prosperity across
            generations.
          </p>
        </div>
        {/* Summary Section */}
        <div className={styles.summary}>
          <h2 className={styles.heading}>Summary</h2>
          <h3 className={styles.subHeading}>
            The Importance of the 10 Pillars in Legacy Planning
          </h3>
          <p className={styles.text}>
            Creating a sustainable legacy requires a holistic approach that
            addresses the foundational elements of generational wealth. The 10
            Pillars of Generational Wealth—Vision, Health, Education,
            Communication, Structures, Assets, Advisors, Sustainable
            Philanthropy, Documentation, and Governance—are the cornerstones of
            a robust family legacy. Together, they form an interconnected
            framework that supports families in preserving their wealth and
            values across generations.
          </p>
          <p className={styles.text}>
            This report evaluates each pillar, providing a comprehensive risk
            score out of 10. A score of 1 highlights areas of critical
            vulnerability, while a score of 10 signifies a well-protected and
            thriving pillar. By identifying potential risks and gaps, the report
            empowers families to take proactive steps to strengthen their
            legacy.
          </p>
        </div>
        <div className={styles.summary}>
          <h3 className={styles.subHeading}>The Purpose of the Risk Report</h3>
          <p className={styles.text}>
            This Risk Report serves as a diagnostic tool, offering clarity on
            the strengths and vulnerabilities within your family’s legacy
            planning. It provides actionable insights to help prioritize areas
            that need attention and offers a roadmap for mitigating risks. By
            understanding these potential vulnerabilities, families can make
            informed decisions to fortify their legacy, ensuring it is resilient
            and aligned with their long-term vision.
          </p>
        </div>
      </div>
    </>
  );
};

export default PageTwo;
