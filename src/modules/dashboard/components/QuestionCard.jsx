import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Form from "./Form";
import {
  nonHoverCard,
  hoverCard,
  buttonStyle,
  buttonHoverStyle,
  cardStyle,
  myStyle,
  hoverQuestionStyle,
} from "../../../stylesheets/questionCard.js";

export default function QuestionCard({ question }) {
  const [lock, setLock] = React.useState(false);
  const [data, setData] = React.useState();

  const shareData = {
    heading: "Share with your friends",
    button: "Share",
  };

  const unlockData = {
    heading: "Enter the password to unlock and play (Try: admin)",
    button: "UNLOCK",
    input: [1],
  };

  return (
    <div>
      <Card
        onMouseOver={(e) => (e.currentTarget.style.scale = hoverCard.scale)}
        onMouseOut={(e) => (e.currentTarget.style.scale = nonHoverCard.scale)}
        style={cardStyle}
        sx={{ maxWidth: 355, position: "relative", height: "340px" }}
      >
        <CardMedia sx={{ height: 140 }} image="./poll1.png" />
        <CardContent>
          <Typography
            style={myStyle}
            gutterBottom
            variant="h6"
            component="div"
            onMouseOver={(e) =>
              (e.currentTarget.style.fontWeight = hoverQuestionStyle.fontWeight)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.fontWeight = myStyle.fontWeight)
            }
          >
            {question}
          </Typography>
        </CardContent>

        <CardActions sx={{ position: "absolute", bottom: 0, right: 0 }}>
          <Button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonStyle.backgroundColor)
            }
            aria-modal="true"
            size="small"
            onClick={() => {
              setData(shareData);
              setLock(true);
            }}
          >
            Share
          </Button>

          <Button
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonStyle.backgroundColor)
            }
            aria-modal="true"
            size="small"
            onClick={() => {
              setData(unlockData);
              setLock(true);
            }}
          >
            {lock ? "OPENED" : "Locked"}
          </Button>
        </CardActions>
      </Card>

      <Form
        visible={lock}
        setVisible={setLock}
        formdata={data}
        question={question}
      />
    </div>
  );
}
