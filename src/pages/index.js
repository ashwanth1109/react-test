import React from "react";

import { connect } from "react-redux";
import search from "../assets/search.svg";
import UserDisplay from "../components/UserDisplay";
import Button from "../components/Button";
import Loader from "../components/Loader";

const mapStateFromProps = state => {
    console.log(state);
    return state;
};

const mapDispatchToProps = dispatch => ({
    updateUserList: users =>
        dispatch({
            type: "UPDATE_USER_LIST",
            users: users
        }),

    updateButtonLoading: buttonLoading =>
        dispatch({ type: "SET_BUTTON_LOADING", buttonLoading: buttonLoading }),

    updateUser: user =>
        dispatch({
            type: "UPDATE_USER",
            user: user
        })
});

const s = {
    container: {
        width: "1000px",
        margin: "24px auto"
    },
    searchContainer: {
        position: "relative",
        height: "35px",
        display: "flex",
        flexDirection: "row",
        margin: "50px 0"
    },
    searchIconContainer: {
        position: "absolute",
        display: "flex",
        height: "35px",
        width: "30px",
        justifyContent: "center",
        alignItems: "center"
    },
    search: {
        padding: "10px 30px",
        position: "absolute",
        height: "35px",
        boxSizing: "border-box",
        width: "250px",
        fontSize: "16px"
    },
    searchIcon: {
        height: "50%"
    }
};

class IndexPage extends React.Component {
    // async componentDidMount() {
    //     const res = await fetch("https://api.github.com/search/users?q=diaz");
    //     const data = await res.json();
    //     this.props.updateUserList(data.items);
    // }

    fetchData = async () => {
        this.props.updateButtonLoading(true);
        const searchTerm = this.refs.search.value;
        if (searchTerm !== "") {
            try {
                const res = await fetch(
                    `https://api.github.com/search/users?q=${searchTerm}`
                );
                // const data = await res.json();
                res.json()
                    .then(data => {
                        this.props.updateUserList(data.items);
                        this.props.updateButtonLoading(false);
                    })
                    .catch(err => {
                        throw err;
                    });
            } catch (err) {
                console.error(err);
            }
        }
    };

    render = (
        { userList, buttonLoading, history, updateUser } = this.props
    ) => {
        return (
            <div style={s.container}>
                <div style={s.searchContainer}>
                    <input
                        type="text"
                        placeholder="Find a member..."
                        style={s.search}
                        ref="search"
                    />
                    <div style={s.searchIconContainer}>
                        <img src={search} alt="Search" style={s.searchIcon} />
                    </div>
                    <div style={{ width: "250px", height: "35px" }} />
                    {buttonLoading ? (
                        <Loader />
                    ) : (
                        <Button onClick={() => this.fetchData()}>Search</Button>
                    )}
                </div>
                {userList.map((user, id) => (
                    <UserDisplay
                        key={id}
                        user={user}
                        history={history}
                        updateUser={updateUser}
                    />
                ))}
            </div>
        );
    };
}

export default connect(
    mapStateFromProps,
    mapDispatchToProps
)(IndexPage);
