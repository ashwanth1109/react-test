import React from "react";

const s = {
    followButton: {
        backgroundColor: "#eff3f6",
        backgroundImage: "linear-gradient(-180deg,#fafbfc,#eff3f6 90%)",
        border: "1px solid rgba(27,31,35,.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#24292e",
        marginBottom: "20px",
        cursor: "pointer"
    }
};

const log = () => console.log("button was clicked");

const WhiteButton = ({ children, width, height, onClick = log }) => (
    <div
        style={{ ...s.followButton, width: width, height: height }}
        onClick={() => onClick()}
    >
        {children}
    </div>
);

export default React.memo(WhiteButton);
