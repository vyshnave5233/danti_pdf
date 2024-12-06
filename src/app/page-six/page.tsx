import Header from "@/theme/components/header/header";
import React from "react";
import styles from "./page-six.module.scss";

const PageSix = () => {
  const questions = [
    {
      question: "Your personal health?",
      answer: "05/10",
    },
    {
      question: "Your family's health",
      answer: "02/10",
    },
    {
      question: "The health of your relationships within your family?",
      answer: "02/10",
    },
    {
      question: "The health of your investments",
      answer: "02/10",
    },
    {
      question: "The health of your business(es)",
      answer: "02/10",
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2>
          01. On a scale of 1 to 10 with 10 being perfect and 1 being a
          disaster, how would you currently value the following:
        </h2>
        {questions.map((item, index) => (
          <div className={styles.question} key={index}>
            <p className={styles.question__text}>{item.question}</p>
            <p className={styles.question__answer}>
              <span>Answer:</span>
              <span className={styles.question__value}>{item.answer}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PageSix;
