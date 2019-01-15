import React from "react";
import Button from "../components/Button";
import WhiteButton from "./WhiteButton";
import Menu from "./Menu";
import { connect } from "react-redux";

const sortParameters = ["created", "updated", "pushed", "full_name"];

const mapStateFromProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    toggleMenu: menuState => {
        dispatch({
            type: "MENU_STATE",
            menuState: menuState
        });
    },
    updateSortParameter: async (sortParameter, selectedUser) => {
        dispatch({
            type: "SORT_PARAMETER",
            sortParameter: sortParameter
        });
        dispatch({
            type: "MENU_STATE",
            menuState: false
        });
        try {
            const res = await fetch(
                `https://api.github.com/users/${
                    selectedUser.login
                }/repos?sort="${sortParameters[sortParameter]}"`
            );
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "UPDATE_USER",
                user: data
            });
        } catch (err) {
            console.error(err);
        }
    }
});

class ShowHeader extends React.Component {
    state = {
        showMenu: false
    };
    goBack = history => history.push("/");

    render = (
        {
            history,
            sortParameter,
            updateSortParameter,
            menuState,
            toggleMenu,
            selectedUser
        } = this.props
    ) => {
        return (
            <div
                style={{
                    flex: 1,
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <Button onClick={() => this.goBack(history)}>Back</Button>
                <div
                    style={{
                        width: "200px",
                        height: "35px",
                        position: "relative"
                    }}
                >
                    <WhiteButton
                        width="200px"
                        height="35px"
                        onClick={() => toggleMenu(!menuState)}
                    >
                        Sort: {sortParameters[sortParameter]}
                    </WhiteButton>
                    {menuState ? (
                        <Menu
                            sortOption={sortParameter}
                            updateSelected={id =>
                                updateSortParameter(id, selectedUser)
                            }
                        />
                    ) : null}
                </div>
            </div>
        );
    };
}

export default connect(
    mapStateFromProps,
    mapDispatchToProps
)(ShowHeader);
