import React, { useState } from "react";

const styles = {
  height: "40px",
  width: "40px",
  border: "2px solid green",
  fontFamily: "Arial, sans-serif",
  fontSize: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

interface Prop {
  childrenNumber?: number;
}

export const Cell: React.FC<Prop> = ({ childrenNumber = 0 }) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div onClick={() => setVisible(true)} style={styles}>
      {visible && childrenNumber}
    </div>
  );
};
