import React from "react";

import { connect } from "react-redux";
import RepoDisplay from "../components/RepoDisplay";
import WhiteButton from "../components/WhiteButton";
import company from "../assets/company.svg";
import location from "../assets/location.svg";
import email from "../assets/email.svg";
import url from "../assets/url-link.svg";

import InfoRow from "../components/InfoRow";
import ShowHeader from "../components/ShowHeader";

const mapStateFromProps = state => {
    console.log(state);
    return state;
};

const s = {
    container: {
        width: "1000px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column"
    },
    profileRepoContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },
    profile: {
        width: "250px",
        padding: "10px",
        display: "flex",
        flexDirection: "column"
    },
    repos: {
        flex: 1,
        padding: "20px"
    },
    avatar: {
        width: "100%",
        marginBottom: "20px",
        borderRadius: "10px"
    },
    name: {
        fontSize: "26px",
        lineHeight: "30px",
        fontWeight: "600"
    },
    login: {
        fontSize: "20px",
        color: "#666",
        marginBottom: "20px"
    },
    followButton: {
        width: "100%",
        height: "35px",
        backgroundColor: "#eff3f6",
        backgroundImage: "linear-gradient(-180deg,#fafbfc,#eff3f6 90%)",
        border: "1px solid rgba(27,31,35,.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#24292e",
        marginBottom: "20px"
    },
    blockInfo: {
        color: "#24292e",
        fontSize: "14px",
        lineHeight: "1.5",
        paddingBottom: "20px",
        marginBottom: "20px",
        borderBottom: "1px solid #33333320"
    }
};

class ShowPage extends React.Component {
    state = {
        user: null,
        repos: [],
        message: "Fetching User . . ."
    };
    componentDidMount = async ({ selectedUser } = this.props) => {
        if (!!selectedUser) {
            try {
                const res = await fetch(
                    `https://api.github.com/users/${selectedUser.login}`
                );
                const res1 = await fetch(
                    `https://api.github.com/users/${selectedUser.login}/repos`
                );
                const data = await res.json();
                const data1 = await res1.json();
                this.setState({
                    user: data,
                    repos: data1
                });
            } catch (err) {
                console.error(err);
            }
        } else {
            this.setState({
                message: "User not found"
            });
        }
    };

    render = (
        { selectedUser, history } = this.props,
        { user, repos, message } = this.state
    ) => {
        console.log(user);
        console.log(repos);
        if (!!user) {
            // const { avatar_url, id, repos_url } = selectedUser;
            return (
                <div style={s.container}>
                    <ShowHeader history={history} />
                    <div style={s.profileRepoContainer}>
                        <div style={s.profile}>
                            <img
                                src={user.avatar_url}
                                style={s.avatar}
                                alt="user"
                            />
                            <div style={s.name}>{user.name}</div>
                            <div style={s.login}>{user.login}</div>
                            <WhiteButton width="100%" height="35px">
                                Follow
                            </WhiteButton>
                            <div style={s.blockInfo}>Block or report user</div>
                            <InfoRow image={company}>{user.company}</InfoRow>
                            <InfoRow image={location}>{user.location}</InfoRow>
                            <InfoRow image={email} link>
                                {user.email}
                            </InfoRow>
                            <InfoRow image={url} link>
                                {user.blog}
                            </InfoRow>
                        </div>
                        <div style={s.repos}>
                            {repos.map((repo, id) => (
                                <RepoDisplay key={id} repo={repo} />
                            ))}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div style={s.container}>
                    <ShowHeader history={history} />
                    <div
                        style={{
                            margin: "30px 0",
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                    >
                        {message}
                    </div>
                </div>
            );
        }
    };
}

export default connect(mapStateFromProps)(ShowPage);
