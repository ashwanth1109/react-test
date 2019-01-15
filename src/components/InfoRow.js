import React from "react";

const s = {
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },
    imageContainer: {
        width: "30px",
        height: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: "10px"
    },
    text: {
        flex: "1",
        whiteSpace: "nowrap",
        overflow: "hidden",
        marginLeft: "10px",
        textOverflow: "ellipsis",
        lineHeight: "1.5",
        fontSize: "14px"
    },
    link: {
        color: "#0366d6",
        cursor: "pointer"
    }
};

const InfoRow = ({ image, children, link }) => {
    if (children) {
        return (
            <div style={s.container}>
                <div style={s.imageContainer}>
                    <img src={image} alt="info" style={{ height: "20px" }} />
                </div>
                <div
                    style={{ ...s.text, ...(link ? s.link : null) }}
                    className={link ? "link" : ""}
                >
                    {children}
                </div>
            </div>
        );
    } else return null;
};

export default React.memo(InfoRow);
