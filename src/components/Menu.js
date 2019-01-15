import React from "react";
import MenuItem from "./MenuItem";

const s = {
    container: {
        position: "absolute",
        bottom: "-205px",
        right: "-1px",
        width: "300px",
        height: "175px",
        border: "1px solid rgba(27,31,35,.15)",
        borderRadius: "3px",
        boxShadow: "0 3px 12px rgba(27,31,35,.15)",
        color: "#586069",
        fontSize: "12px",
        margin: "4px 0 20px 0",
        backgroundColor: "#fff"
    },
    header: {
        backgroundColor: "#f6f8fa",
        borderBottom: "1px solid #e1e4e8",
        lineHeight: "16px",
        padding: "8px 10px",
        color: "#000",
        fontWeight: "500"
    }
};

const sortParameters = ["created", "updated", "pushed", "full_name"];

class Menu extends React.Component {
    render({ sortOption, updateSelected } = this.props) {
        return (
            <div style={s.container}>
                <div style={s.header}>Select sort parameter:</div>
                {sortParameters.map((sortParameter, id) => (
                    <MenuItem
                        key={id}
                        selected={sortOption === id}
                        onClick={() => updateSelected(id)}
                    >
                        {sortParameter}
                    </MenuItem>
                ))}
            </div>
        );
    }
}

export default Menu;
