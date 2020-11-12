import { connect} from "react-redux";
import React from "react"
import { followAC, isFetching, setCurrentPage, setTotalUsersCount, setUsers, unfollowAC } from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from 'axios'
import preloaderImg from '../../assets/images/preloader.gif'
import Preloader from "../common/Preloader";
class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    onPageChanged = (p) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            }
            );
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader loadImage={preloaderImg} /> : null}
                <Users currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    users={this.props.users}
                />
            </>);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
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
        isFetching: state.usersPage.isFetching
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPage(pageNumber));
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCount(count));
        },
        toggleIsFetching: ((fetching) => {
            dispatch(isFetching(fetching));
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);