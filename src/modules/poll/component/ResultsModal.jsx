// ResultsModal.jsx
import Chart from "./Chart";
import RefreshIcon from "@mui/icons-material/Refresh";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import {styles} from "../../../stylesheets/poll.js";
export default function ResultsModal({ open, onClose, question, options }) {
  const [reloadFlag, setReloadFlag] = useState(false);

  if (!open) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        
        <CloseIcon style={styles.closeIcon} onClick={onClose} />

        <div style={styles.titleRow}>
          <h3 style={styles.heading}>Poll Results</h3>
          <RefreshIcon
            style={styles.refreshIcon}
            onClick={() => setReloadFlag((prev) => !prev)}
          />
        </div>

        <Chart
          question={question}
          option1={options[0]}
          option2={options[1]}
          option3={options[2]}
          option4={options[3]}
          reload={reloadFlag}
        />
      </div>
    </div>
  );
}
