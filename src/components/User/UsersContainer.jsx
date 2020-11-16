import {connect} from "react-redux";
import React from "react";
import {
    follow,
    toggleIsFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow,
    toggleFollowingProgress
} from "../../redux/usersReducer";
import Users from "./Users";
import preloaderImg from '../../assets/images/preloader.gif';
import Preloader from "../common/Preloader";
import {usersAPI} from "../../api/api"

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    onPageChanged = (p) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                }
            );
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader loadImage={preloaderImg}/> : null}
                <Users currentPage={this.props.currentPage}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       users={this.props.users}
                       isFollowing={this.props.isFollowing}
                       toggleFollowingProgress = {this.props.toggleFollowingProgress}
                />
            </>)
            ;
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                }
            );
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer);