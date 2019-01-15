import React from "react";

const s = {
    container: {
        width: "100px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#333",
        color: "#fff",
        cursor: "pointer"
    }
};
const Button = ({ onClick, children }) => (
    <div style={s.container} onClick={() => onClick()}>
        {children}
    </div>
);

export default React.memo(Button);
