import Header from "@/theme/components/header/header";
import React from "react";
import styles from "../page-two/page-two.module.scss";

const PageThree = () => {
  return (
    <>
      <Header />
      <div className={styles.pageTwo}>
        <div className={styles.summary}>
          <h3 className={styles.subHeading}>
            A Systematic Approach to Legacy Management
          </h3>
          <p className={styles.text}>
            Legacy planning requires more than just identifying risks—it demands
            an effective, adaptable system to address them. The Danti Operating
            System provides families with the tools to digitize and manage
            generational wealth in a structured, sustainable way. By offering a
            central platform to coordinate, monitor, and optimize the 10 Pillars
            of Generational Wealth, Danti helps reduce risk and creates a
            reliable foundation for your legacy.
          </p>
          <p className={styles.text}>
            This report is your first step toward understanding and enhancing
            your family&apos;s legacy. With the right tools and a clear
            framework, you can ensure that your wealth and values endure for
            generations to come
          </p>
        </div>
        <div className={styles.summary}>
          <h3 className={styles.subHeading}>Next Steps</h3>
          <p className={styles.text}>
            If you&apos;re interested in discovering more about how the Danti
            Operating System can help transform your legacy planning, we invite
            you to press the &quot;Yes I want to discuss the Danti Legacy
            Solution&quot; button on our homepage. One of our experienced
            consultants will contact you to discuss how Danti can support your
            family&apos;s journey toward a secure and enduring legacy.
          </p>
        </div>
      </div>
    </>
  );
};

export default PageThree;
