import React from "react";
import styles from "./page-four.module.scss";
import banner from "@/theme/images/banner.png";
import Image from "next/image";
import Header from "@/theme/components/header/header";
import education from "@/theme/images/education.png";
import RoundedProgress from "@/theme/components/progress/progress";
const PageFour = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.imageContainer}>
            <Image
              src={banner}
              alt="Education Background"
              fill
              className={styles.backgroundImage}
            />
          </div>
          <div className={styles.overlay}>
            <div className={styles.iconAndTitle}>
              <Image
                src={education}
                alt="Education Icon"
                width={22}
                height={22}
              />
              <h1>Education</h1>
            </div>

            <RoundedProgress value={8} />
          </div>
        </div>

        {/* Content Section */}
        <div className={styles.content}>
          <div className={styles.innerContent}>
            <div>
              <h2>01.</h2>
            </div>
            <div>
              <h2>
                What role do you want education to play in preparing your
                children and grandchildren for managing wealth?
              </h2>
              <p>
                I want education to equip my children and grandchildren with
                financial literacy, responsible wealth stewardship, and a strong
                ethical foundation. It should prepare them to manage wealth
                wisely, create value, and contribute positively to society.
              </p>
              <div className={styles.comment}>
                <strong>Comment:</strong>
                <p>
                  The focus on actionable steps and tailored recommendations
                  provides a solid framework for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageFour;
