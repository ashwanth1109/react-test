import React from "react";

import { connect } from "react-redux";

const mapStateFromProps = state => {
    console.log(state);
    return state;
};

const s = {
    container: {
        width: "1000px",
        margin: "50px auto"
    }
};

class ShowPage extends React.Component {
    render = ({ selectedUser } = this.props) => {
        if (!!selectedUser) {
            const { avatar_url, id, repos_url } = selectedUser;
            return (
                <div style={s.container}>
                    <div>Avatar URL: ${avatar_url}</div>
                    <div>ID: ${id}</div>
                    <div>REPOS_URL: ${repos_url}</div>
                </div>
            );
        } else {
            return <div style={s.container}>User not found</div>;
        }
    };
}

export default connect(mapStateFromProps)(ShowPage);
