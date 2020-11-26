import {connect} from "react-redux";
import React from "react";
import {
    toggleIsFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    followThunk,
    unfollowThunk,
    getUsers, toggleFollow
} from "../../redux/reducers/usersReducer";
import Users from "./Users";
import preloaderImg from '../../assets/images/preloader.gif';
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../common/HOCs/withAuthRedirect";
import {compose} from "redux";
import {getIsAuth} from "../../redux/selectors/auth-selector";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalUsersCount, getUsersSelector
} from "../../redux/selectors/users-selector";

class UsersContainer extends React.Component {

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
        users: getUsersSelector(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching:getIsFetching(state),
        isFollowing: getIsFollowing(state),
        isAuth: getIsAuth(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        toggleFollow,
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