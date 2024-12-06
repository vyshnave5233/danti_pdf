import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface RoundedProgressProps {
  value: number;
}

const getColor = (
  value: number
): { progressColor: string; backgroundColor: string } => {
  if (value <= 2) {
    return { progressColor: "#FF0000", backgroundColor: "#FF4444" }; 
  } else if (value <= 4) {
    return { progressColor: "#FF9900", backgroundColor: "#FFCC66" }; 
  } else if (value <= 6) {
    return { progressColor: "#FFFF00", backgroundColor: "#FFFF99" }; 
  } else if (value <= 8) {
    return { progressColor: "#66CC33", backgroundColor: "#99FF66" }; 
  } else {
    return { progressColor: "#00CC00", backgroundColor: "#66FF66" }; 
  }
};

const RoundedProgress: React.FC<RoundedProgressProps> = ({ value }) => {
  const normalizedValue = (value / 10) * 100;
  const { progressColor, backgroundColor } = getColor(value);

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >

      <CircularProgress
        variant="determinate"
        value={normalizedValue}
        size={35}
        thickness={5}
        sx={{
          color: progressColor,
          "& .MuiCircularProgress-circle": {
            strokeLinecap: "round", 
          },
        }}
      />
    
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: backgroundColor,
          borderRadius: "50%",
          width: 30,
          height: 30,
        }}
      >
        {/* Centered Text */}
        <Typography
          variant="caption"
          component="div"
          sx={{
            fontSize: "9px",
            fontWeight: "700",
            display: "flex",
            alignContent: "center",
            color: "#3C2C00",
          }}
        >
          {value} / 10
        </Typography>
      </Box>
    </Box>
  );
};

export default RoundedProgress;
