import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function ToDo() {
  const [checked, setChecked] = React.useState([]);
  const navigate = useNavigate(); // Initialize navigate

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const redirectToQnA = () => {
    // Redirect to the QnA page
    navigate("/qna");
  };

  return (
    <List sx={{ width: "100%", maxWidth: "360px", color: "white" }}>
      {["A", "B", "C", "D", "E"].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            disablePadding
            onClick={redirectToQnA} // Redirect to QnA page on click
            style={{ cursor: "pointer" }} // Add pointer cursor
          >
            <ListItemButton role={undefined} dense>
              {checked.indexOf(value) !== -1 ? <DoneAllIcon /> : null}
              <ListItemText
                id={labelId}
                primary={`Grade 10 ${value} - Math`}
                primaryTypographyProps={{ style: { fontSize: "20px" } }}
                style={{
                  fontFamily: "Poppins",
                }}
                secondary="8:00 A.M. Monday, 18th Sept."
                secondaryTypographyProps={{
                  style: {
                    fontSize: "14px",
                    margin: "10px",
                    color: "#F6F4EB",
                    fontStyle: "thin",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
