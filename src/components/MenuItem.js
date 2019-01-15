import React from "react";
import tick from "../assets/tick.svg";
import tickWhite from "../assets/tick-white.svg";

const s = {
    container: {
        width: "100%",
        height: "35px"
    },
    borderContainer: {
        width: "90%",
        borderBottom: "1px solid #33333320",
        display: "flex",
        flexDirection: "row",
        height: "35px"
    },
    selected: {
        width: "30px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    option: {
        flex: 1,
        height: "35px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    tick: {
        width: "13px"
    }
};

class MenuItem extends React.Component {
    state = {
        hover: false
    };
    render = (
        { children, selected, onClick } = this.props,
        { hover } = this.state
    ) => (
        <div
            style={s.container}
            className="option"
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
            onClick={() => onClick()}
        >
            <div style={s.borderContainer}>
                <div style={s.selected}>
                    {selected ? (
                        hover ? (
                            <img src={tickWhite} alt="tick" style={s.tick} />
                        ) : (
                            <img src={tick} alt="tick" style={s.tick} />
                        )
                    ) : null}
                </div>
                <div style={s.option}>{children}</div>
            </div>
        </div>
    );
}

export default MenuItem;
