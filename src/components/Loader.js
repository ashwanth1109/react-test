import React from "react";

const s = {
    container: {
        width: "100px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#333"
    },
    dot: {
        width: "8px",
        height: "8px",
        borderRadius: "4px",
        backgroundColor: "#FFF",
        marginLeft: "3px",
        marginRight: "3px"
    }
};

const Loader = () => (
    <div style={s.container}>
        <div
            style={{
                ...s.dot,
                animation: "loadingDot 1s 0s infinite"
            }}
        />
        <div
            style={{
                ...s.dot,
                animation: "loadingDot 1s 0.25s infinite"
            }}
        />
        <div
            style={{
                ...s.dot,
                animation: "loadingDot 1s 0.5s infinite"
            }}
        />
    </div>
);

export default React.memo(Loader);
