import React from "react";

const showUser = (user, history, updateUser) => {
    console.log(user);
    updateUser(user);
    history.push("/user");
};

const UserDisplay = ({ user, history, updateUser }) => (
    <div
        style={{
            display: "flex",
            flexDirection: "row",
            padding: "20px 0",
            borderTop: "1px solid #33333320"
        }}
    >
        <img
            src={user.avatar_url}
            style={{
                width: "50px",
                height: "50px",
                margin: "0 20px",
                cursor: "pointer"
            }}
            alt="github user avatar"
            onClick={() => showUser(user, history, updateUser)}
        />
        <div
            style={{
                fontSize: "16px",
                color: "#0366d6",
                height: "50px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer"
            }}
            onClick={() => showUser(user, history, updateUser)}
        >
            {user.login}
        </div>
    </div>
);

export default React.memo(UserDisplay);
