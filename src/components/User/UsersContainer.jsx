import {connect} from "react-redux";
import React from "react";
import {
    follow,
    toggleIsFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow,
    toggleFollowingProgress,
    getUsers,
    followThunk,
    unfollowThunk
} from "../../redux/usersReducer";
import Users from "./Users";
import preloaderImg from '../../assets/images/preloader.gif';
import Preloader from "../common/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader loadImage={preloaderImg}/> : null}
                <Users currentPage={this.props.currentPage}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}
                       followThunk={this.props.followThunk}
                       unfollowThunk={this.props.unfollowThunk}
                       users={this.props.users}
                       isFollowing={this.props.isFollowing}
                       toggleFollowingProgress = {this.props.toggleFollowingProgress}
                />
            </>)
            ;
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
        isAuth: state.auth.isAuthorized
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingProgress,
        unfollowThunk,
        followThunk,
        getUsers
    })
)(UsersContainer);