import React from "react";
import WhiteButton from "./WhiteButton";
import star from "../assets/star.svg";

const s = {
    container: {
        padding: "30px 0",
        borderTop: "1px solid #33333320",
        display: "flex",
        flexDirection: "row"
    },
    title: {
        color: "#0366d6",
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "20px",
        marginBottom: "10px"
    },
    description: {
        color: "#586069",
        fontSize: "14px",
        lineHeight: "1.5",
        maxWidth: "500px"
    }
};

const RepoDisplay = ({ repo }) => (
    <div style={s.container}>
        <div style={{ flex: 1 }}>
            <div style={s.title}>{repo.name}</div>
            <div style={s.description}>{repo.description}</div>
        </div>
        <WhiteButton width="70px" height="28px">
            <div>
                <img
                    src={star}
                    alt="star"
                    style={{ width: "13px", marginRight: "5px" }}
                />
                Star
            </div>
        </WhiteButton>
    </div>
);

export default React.memo(RepoDisplay);
