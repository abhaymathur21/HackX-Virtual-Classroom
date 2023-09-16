import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import image from "../assets/image5.png";
export default function SmallCard() {
  // Define an array of grade names
  const gradeNames = ["Grade 10A", "Grade 10B", "Grade 10C", "Grade 10D"];

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {gradeNames.map((grade, index) => (
        <Card
          key={index} // Provide a unique key for each card
          sx={{
            width: "250px",
            height: "150px",
            backgroundColor: "#F6F6F6",
            border: "3px solid #749BC2",
            margin: "5px 18px",
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontSize={24}
                fontStyle="Poppins"
              >
                {grade}
              </Typography>
              <div
                style={{
                  height: "80px",
                  width: "120px",
                  marginLeft:"110px",
                  marginTop:"-10px"
                }}
              >
                <CardMedia
                  component="img"
                  src={image}
                  alt="stats"
                  sx={{ marginLeft: "auto" }}
                />
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
