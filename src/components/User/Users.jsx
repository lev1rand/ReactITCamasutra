import React from "react"
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        {
            users.map(u => <div>
                <span>
                    <div key={u.id}>
                        <NavLink to={"/profile/" + u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto}
                                                              className={styles.userPhoto}
                        ></img>
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                                ?
                                <button
                                    disabled={
                                        props.isFollowing.some(id => id == u.id)
                                    }
                                    onClick={
                                        () => {
                                            props.unfollowThunk(u.id);
                                        }}>Unfollow
                                </button>
                                : <button
                                    disabled={
                                        props.isFollowing.some(id => id == u.id)
                                    }
                                    onClick={
                                        () => {
                                            props.followThunk(u.id);
                                        }}>Follow
                                </button>
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