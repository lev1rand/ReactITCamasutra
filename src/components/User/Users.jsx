import React from "react"
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {toggleFollowingProgress} from "../../redux/usersReducer";

const Users = (props) => {
    let pagesCount = props.totalUsersCount / props.pageSize;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let follow = (userId) => {

    }
    let unfollow = (userId) => {

    }
    return <div>
        <div>
            {pages.map(p => {
                return (
                    <span
                        className={props.currentPage === p ? styles.selectedPage : null}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}>
                        {p}
                    </span>
                );
            })}
        </div>
        {
            props.users.map(u => <div>
                <span>
                    <div key={u.id}>
                        <NavLink to={"/profile/" + u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto}
                                                              className={styles.userPhoto}></img>
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                                ?
                                <button disabled={props.isFollowing.some(id => id == u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    usersAPI.unfollowUser(u.id)
                                        .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(u.id);
                                                }
                                                props.toggleFollowingProgress(false, u.id);
                                            }
                                        );
                                }}>Unfollow</button>
                                : <button disabled={props.isFollowing.some(id => id == u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    usersAPI.followUser(u.id)
                                        .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(u.id);
                                                }
                                                props.toggleFollowingProgress(false, u.id);
                                            }
                                        );
                                }}>Follow</button>
                        }

                            </div>
                            </span>
                <span>
                            <span>
                            <div>
                            {u.name}
                            </div>
                            <div>
                            {u.status}
                            </div>
                            </span>
                            <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                            </span>
                            </span>
            </div>)
        }
    </div>
}


export default Users;