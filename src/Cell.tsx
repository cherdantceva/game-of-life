import React from "react";

const styles = {
    height: "40px",
    width: "40px",
    border: "2px solid green",
    fontFamily: "Arial, sans-serif",
    fontSize: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

interface Prop {
    children?: number;
    action?: () => void
}


export const Cell: React.FC<Prop> = ({
   children = 0,
    action= () => alert(children)
}) => <div onClick={action} style={styles}><div>{children}</div></div>;