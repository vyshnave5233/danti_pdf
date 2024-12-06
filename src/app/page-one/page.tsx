"use client";

import Header from "@/theme/components/header/header";
import WealthPillarsChart from "@/theme/components/wealth-chart/wealth-chart";
import styles from "./page-one.module.scss";
import Image from "next/image";
import person from "@/theme/images/person.png";


import RoundedProgress from "@/theme/components/progress/progress";
export default function PageOne() {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.blueprintSection}>
          <h2 className={styles.title}>
            Designing Your Generational Wealth Blueprint
          </h2>
          <p className={styles.description}>
            Did you know that 9 out of 10 families lose their wealth within
            three generations? This report serves as the foundation for crafting
            your family’s Generational Wealth Blueprint. By analyzing the 10
            Pillars of Generational Wealth, it identifies areas of strength and
            highlights vulnerabilities that could put your legacy at risk. Each
            pillar has been assessed and assigned a risk score, offering you
            clear, actionable insights to build a resilient and lasting legacy
            for future generations.
          </p>
          <div className={styles.scoreCard}>
            <div className={styles.score}>
              <p className={styles.scoreLabel}>Overall Legacy Risk Score</p>

              <RoundedProgress value={3} />
              <p className={styles.assessmentDate}>Assessment on: 15/12/2022</p>
            </div>
            <div className={styles.divider} />
            <div className={styles.consultantDetails}>
              <p className={styles.detailsTitle}>Consultant details</p>
              <div className={styles.consultantInfo}>
                <Image src={person} alt="" width={32} height={32} />
                <div>
                  <p className={styles.consultantName}>Erick John</p>
                  <div className={styles.detailContact}>
                    <span className={styles.consultantEmail}>
                      Erick@gmail.com
                    </span>
                    <span className={styles.consultantEmail}>
                      +44 567854234
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.chart}>
          <WealthPillarsChart
            onChartClick={(section) => console.log(section)}
          />
        </div>

        {/* Risk Points Section */}
        <div className={styles.riskPoints}>
          <div className={styles.riskItem}>
            <span
              className={styles.dot}
              style={{ backgroundColor: "red" }}
            ></span>
            <p>High Risk</p>
          </div>
          <div className={styles.riskItem}>
            <span
              className={styles.dot}
              style={{ backgroundColor: "yellow" }}
            ></span>
            <p>Medium Risk</p>
          </div>
          <div className={styles.riskItem}>
            <span
              className={styles.dot}
              style={{ backgroundColor: "green" }}
            ></span>
            <p>Low Risk</p>
          </div>
        </div>
      </div>
    </>
  );
}
