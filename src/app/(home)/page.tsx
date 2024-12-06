"use client";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import PageOne from "../page-one/page";
import PageTwo from "../page-two/page";
import PageThree from "../page-three/page";
import PageFour from "../page-four/page";
import styles from "./generator.module.scss";

import PageFive from "../page-five/page";
import PageSix from "../page-six/page";

export default function PdfGenerator() {
  const generatePDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");

    const sectionIds = ["page1", "page2", "page3", "page4", "page5", "page6"];
    const totalPages = sectionIds.length;

    const renderSectionToPDF = async (
      sectionId: string,
      pageNumber: number,
      addNewPage: boolean = false
    ) => {
      const section = document.getElementById(sectionId);

      if (section) {
        const canvas = await html2canvas(section, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        if (addNewPage) {
          pdf.addPage();
        }

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(10);
        pdf.text(
          `Page ${String(pageNumber).padStart(2, "0")} of ${String(
            totalPages
          ).padStart(2, "0")}`,
          pdfWidth / 2,
          pdfHeight - 8,
          { align: "center" }
        );
      } else {
        console.error(`Element with ID '${sectionId}' not found.`);
      }
    };

    for (let i = 0; i < sectionIds.length; i++) {
      await renderSectionToPDF(sectionIds[i], i + 1, i > 0);
    }

    pdf.save("example_with_watermark.pdf");
  };

  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <button onClick={generatePDF} className={styles.button}>
        Download PDF
      </button>

      <div id="page1" className={`${styles.page} ${styles.page1}`}>
        <div className={styles.overlay}></div>
        <PageOne />
      </div>
      <div id="page2" className={`${styles.page} ${styles.page2}`}>
        <div className={styles.overlay}></div>
        <PageTwo />
      </div>
      <div id="page3" className={`${styles.page} ${styles.page3}`}>
        <div className={styles.overlay}></div>
        <PageThree />
      </div>
      <div id="page4" className={`${styles.page} ${styles.page4}`}>
        <div className={styles.overlay}></div>
        <PageFour />
      </div>
      <div id="page5" className={`${styles.page} ${styles.page5}`}>
        <div className={styles.overlay}></div>
        <PageFive />
      </div>
      <div id="page6" className={`${styles.page} ${styles.page6}`}>
        <div className={styles.overlay}></div>
        <PageSix />
      </div>
    </div>
  );
}
