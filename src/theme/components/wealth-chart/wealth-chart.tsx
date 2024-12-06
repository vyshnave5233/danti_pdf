"use client";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ChartMeta,
  ArcElement as ArcElementType,
} from "chart.js";
import Image from "next/image";
import { Doughnut } from "react-chartjs-2";
import img from "@/theme/images/Rectangle.png";
import pillarImgSmall from "@/theme/images/Rectangle.png";
import styles from "./chart-structure.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PillarData {
  label: string;
  value: number;
  name: string;
}

interface WealthPillarsChartProps {
  onChartClick: (section: string) => void;
}

const WealthPillarsChart: React.FC<WealthPillarsChartProps> = ({
  onChartClick,
}) => {
  const [chartData, setChartData] = useState<PillarData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/chart-data");
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getColor = (label: string | number) => {
    const numericValue = parseInt(String(label).split("/")[0], 10);
    if (numericValue >= 1 && numericValue <= 2)
      return "linear-gradient(90deg, rgba(211,225,3,1) 5%, rgba(211,215,3,1) 255%, rgba(191,188,5,1) 35%, rgba(170,161,6,1) 45%, rgba(139,120,8,1) 50%, rgba(121,95,9,1) 58%, rgba(141,130,28,1) 100%, rgba(6,86,172,1) 100%, rgba(0,212,255,1) 100%)";
    if (numericValue >= 5 && numericValue <= 6) return "#FFD700";
    if (numericValue === 7) return "#9ACD32"; // Lime
    if (numericValue >= 8 && numericValue <= 10) return "#4CAF50";
    return "#CCCCCC";
  };

  const outerSections = [
    "Governance",
    "Structures",
    "Sustainable Philanthropy",
    "Assets",
    "Advisors",
    "Documentation",
  ];
  const innerSections = ["Vision", "Education", "Health", "Communication"];

  const normalize = (str: string) => str.trim().toLowerCase();

  const getDataForSection = (name: string): PillarData => {
    const normalizedSectionName = normalize(name);
    const sectionData = chartData.find(
      (item) => normalize(item.name) === normalizedSectionName
    );
    return sectionData || { label: "0/10", value: 0, name };
  };

  const curvedTextPlugin = {
    id: "curvedText",
    afterDraw: (chart: ChartJS) => {
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;
      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;

      const getFontSize = () => {
        const canvasWidth = chart.width;
        if (canvasWidth < 400) return "8px Manrope";
        if (canvasWidth < 650) return "12px Manrope";
        return "12px Manrope";
      };

      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const drawTextOnArc = (
        meta: ChartMeta,
        sections: string[],
        isInner: boolean
      ) => {
        // Explicitly cast meta.data to ArcElement[]
        (meta.data as ArcElementType[]).forEach((arc, index) => {
          const section = sections[index];
          const data = getDataForSection(section);

          const angle = (arc.startAngle + arc.endAngle) / 2; // Middle angle
          const radius = isInner
            ? (arc.outerRadius + arc.innerRadius) / 2
            : (arc.outerRadius + arc.innerRadius) / 2;

          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;

          ctx.save();
          ctx.fillStyle = "#000"; // Custom text color
          ctx.font = getFontSize(); // Custom font style
          ctx.translate(x, y);

          if (angle >= 0 && angle <= Math.PI / 2) {
            ctx.rotate(angle + Math.PI / 2 + Math.PI);
          } else if (angle > (3 * Math.PI) / 2 && angle <= 2 * Math.PI) {
            ctx.rotate(angle + Math.PI / 2 + Math.PI);
          } else if (angle >= Math.PI / 2 && angle <= Math.PI) {
            ctx.rotate(angle + Math.PI / 2 + Math.PI);
          } else {
            ctx.rotate(angle + Math.PI / 2);
          }

          ctx.fillText(section, 0, -10); // Section name
          ctx.fillText(data.label, 0, 10); // Data label
          ctx.restore();
        });
      };

      const outerMeta = chart.getDatasetMeta(0);
      drawTextOnArc(outerMeta, outerSections, false);

      const innerMeta = chart.getDatasetMeta(1);
      drawTextOnArc(innerMeta, innerSections, true);

      ctx.restore();
    },
  };

  const data: ChartData<"doughnut"> = {
    labels: [],
    datasets: [
      {
        data: outerSections.map(() => 1),
        backgroundColor: outerSections.map((section) => {
          const data = getDataForSection(section);
          return getColor(data.label);
        }),
        borderColor: "#FFFFFF",
        borderWidth: 2,
        weight: 40,
      },
      {
        data: innerSections.map(() => 1),
        backgroundColor: innerSections.map((section) => {
          const data = getDataForSection(section);
          return getColor(data.label);
        }),
        borderColor: "#FFFFFF",
        borderWidth: 2,
        weight: 30,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    cutout: "50%",
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const sections =
              context.datasetIndex === 0 ? outerSections : innerSections;
            const section = sections[context.dataIndex];
            const data = getDataForSection(section);
            return `${section}: ${data.label}`;
          },
        },
      },
    },

    onClick: (_event, elements) => {
      if (elements.length > 0) {
        const chartElement = elements[0];
        const section =
          chartElement.datasetIndex === 0
            ? outerSections[chartElement.index]
            : innerSections[chartElement.index];
        onChartClick(section);
      }
    },
    layout: { padding: 20 },
    animation: { animateRotate: true, animateScale: true, duration: 2000 },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    elements: {
      arc: {
        hoverOffset: 50,
      },
    },
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles["back"]}>
          <div className={styles.chartWrapper}>
            <Doughnut
              data={data}
              options={options}
              plugins={[curvedTextPlugin]}
              className={styles["Doughnut"]}
            />
            <div className={styles.d}>
              <div className={styles.img}>
                <Image src={img} alt="ss" />
                <div className={styles.dantiDiv}>
                  <div className={styles.name}>10 PILLARS</div>
                  <div className={styles.sub}>
                    of <br /> Generational Wealth
                  </div>
                </div>
              </div>
              {/* for small screen */}
              <div className={styles["img-small"]}>
                <Image
                  className={styles["piller-small"]}
                  src={pillarImgSmall}
                  alt="pilars"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default WealthPillarsChart;
